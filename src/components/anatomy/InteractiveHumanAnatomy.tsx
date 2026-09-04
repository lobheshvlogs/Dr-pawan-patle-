import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Layers,
  Activity,
  Info,
  ChevronRight,
  Sparkles,
  Shield,
  Eye,
  Sliders,
  Check,
  X,
  Upload,
  FileCode,
  Play,
  Pause,
  Maximize2,
  Gauge,
  Film,
  Box
} from 'lucide-react';
import {
  AnatomicalSystem,
  CutawayMode,
  LayerVisibility,
  AnatomicalStructure,
  ANATOMY_CONFIG,
  ANATOMY_SYSTEMS_LIST,
  ANATOMICAL_STRUCTURES_DATA
} from '../../data/anatomyData';

interface InteractiveHumanAnatomyProps {
  gender?: 'male' | 'female';
  onGenderChange?: (gender: 'male' | 'female') => void;
}

export const InteractiveHumanAnatomy: React.FC<InteractiveHumanAnatomyProps> = ({
  gender: externalGender,
  onGenderChange
}) => {
  // Model & State
  const [internalGender, setInternalGender] = useState<'male' | 'female'>('male');
  const gender = externalGender !== undefined ? externalGender : internalGender;

  const [activeSystem, setActiveSystem] = useState<AnatomicalSystem>('ALL');
  const [cutawayMode, setCutawayMode] = useState<CutawayMode>('Internal');
  const [activeLayer, setActiveLayer] = useState<LayerVisibility>('All');
  const [selectedStructureId, setSelectedStructureId] = useState<string | null>('heart');
  const [hoveredStructureName, setHoveredStructureName] = useState<string | null>(null);

  // Viewer Mode: 'video' (user's real 3D anatomical models) vs 'glb' (Three.js 3D pipeline)
  const [viewerMode, setViewerMode] = useState<'video' | 'glb'>('video');

  // Dual Video Player References for Instant Switching
  const maleVideoRef = useRef<HTMLVideoElement>(null);
  const femaleVideoRef = useRef<HTMLVideoElement>(null);
  const activeVideoRef = gender === 'male' ? maleVideoRef : femaleVideoRef;

  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);

  // GLB Pipeline State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAssetLoaded, setIsAssetLoaded] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loadedMeshCount, setLoadedMeshCount] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);

  // Three.js References
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRootRef = useRef<THREE.Group | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Raycasting & Camera Animation
  const interactiveMeshesRef = useRef<THREE.Mesh[]>([]);
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.2, 5.2));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  // Current selected structure information
  const selectedStructure: AnatomicalStructure | null = selectedStructureId
    ? ANATOMICAL_STRUCTURES_DATA[selectedStructureId] || null
    : null;

  // Video Source URLs for Male & Female
  const maleVideoSrc = '/videos/bodymale.mov';
  const femaleVideoSrc = '/videos/female.mov';

  // Camera Focus on selected structure
  const handleSelectStructure = (structureId: string) => {
    setSelectedStructureId(structureId);
    const struct = ANATOMICAL_STRUCTURES_DATA[structureId];
    if (struct && viewerMode === 'glb') {
      targetCamPos.current.set(0, struct.cameraTarget.y, struct.cameraTarget.distance);
      targetLookAt.current.set(0, struct.cameraTarget.y, 0);
    }
  };

  // Reset View
  const handleResetView = () => {
    targetCamPos.current.set(0, 0.2, 5.2);
    targetLookAt.current.set(0, 0, 0);
    setSelectedStructureId(null);
    if (maleVideoRef.current) maleVideoRef.current.currentTime = 0;
    if (femaleVideoRef.current) femaleVideoRef.current.currentTime = 0;
    if (modelRootRef.current) {
      modelRootRef.current.rotation.set(0, 0, 0);
    }
  };

  // Switch Male / Female with instant video playback sync
  const handleGenderSwitch = (newGender: 'male' | 'female') => {
    if (newGender === gender) return;
    if (onGenderChange) {
      onGenderChange(newGender);
    } else {
      setInternalGender(newGender);
    }

    // Sync playback time and resume playing
    const fromRef = newGender === 'female' ? maleVideoRef : femaleVideoRef;
    const toRef = newGender === 'female' ? femaleVideoRef : maleVideoRef;
    if (toRef.current && fromRef.current) {
      toRef.current.currentTime = fromRef.current.currentTime;
      toRef.current.play().catch(() => {});
    }
  };

  // Video Control Handlers
  const togglePlay = () => {
    const vid = activeVideoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsVideoPlaying(true);
    } else {
      vid.pause();
      setIsVideoPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const vid = activeVideoRef.current;
    if (!vid) return;
    const curr = vid.currentTime;
    const dur = vid.duration || 1;
    setVideoProgress((curr / dur) * 100);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vid = activeVideoRef.current;
    if (!vid) return;
    const scrubVal = parseFloat(e.target.value);
    setVideoProgress(scrubVal);
    const dur = vid.duration || 1;
    vid.currentTime = (scrubVal / 100) * dur;
    
    // Sync the other video so switching later stays at same angle
    const otherVid = gender === 'male' ? femaleVideoRef.current : maleVideoRef.current;
    if (otherVid) {
      otherVid.currentTime = vid.currentTime;
    }
  };

  const handleSpeedChange = () => {
    const speeds = [0.5, 1, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    if (maleVideoRef.current) maleVideoRef.current.playbackRate = nextSpeed;
    if (femaleVideoRef.current) femaleVideoRef.current.playbackRate = nextSpeed;
    setPlaybackSpeed(nextSpeed);
  };

  // Interactive Anatomical Hotspots mapped precisely to the 16:9 anatomical body
  const anatomicalHotspots = [
    { id: 'brain', name: 'Brain & Cranium', top: '17%', left: '50%' },
    { id: 'skull', name: 'Skull & Facial Bones', top: '22%', left: '50%' },
    { id: 'lungs', name: 'Lungs & Thorax', top: '31%', left: '53%' },
    { id: 'heart', name: 'Heart & Mediastinum', top: '32%', left: '47%' },
    { id: 'rib_cage', name: 'Rib Cage & Sternum', top: '34%', left: '50%' },
    { id: 'liver', name: 'Liver & Gallbladder', top: '39%', left: '53%' },
    { id: 'stomach', name: 'Stomach & Epigastrium', top: '40%', left: '47%' },
    { id: 'kidneys', name: 'Kidneys / Flanks', top: '44%', left: '53%' },
    { id: 'small_intestine', name: 'Intestines / Digestive', top: '49%', left: '50%' },
    { id: 'pelvis', name: 'Pelvis & Reproductive', top: '55%', left: '50%' },
    { id: 'muscles', name: 'Quadriceps / Major Muscles', top: '65%', left: '47%' }
  ];

  // Setup Three.js WebGL Engine when in GLB Mode
  useEffect(() => {
    if (viewerMode !== 'glb') return;

    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 650;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.copy(targetCamPos.current);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 7, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7cc4fa, 2.0);
    fillLight.position.set(-4, 3, 3);
    scene.add(fillLight);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    setIsLoading(true);
    setLoadError(null);
    setIsAssetLoaded(false);

    const assetUrl = gender === 'male' ? ANATOMY_CONFIG.male.assetPath : ANATOMY_CONFIG.female.assetPath;

    gltfLoader.load(
      assetUrl,
      (gltf) => {
        const model = gltf.scene;
        modelRootRef.current = model;
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3.6 / (maxDim || 1);
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        let meshCount = 0;
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            interactiveMeshesRef.current.push(mesh);
            meshCount++;
          }
        });

        setLoadedMeshCount(meshCount);
        setIsAssetLoaded(true);
        setIsLoading(false);
      },
      undefined,
      () => {
        setIsLoading(false);
        setIsAssetLoaded(false);
        setLoadError(`Target GLB asset not found at: ${assetUrl}`);
      }
    );

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      camera.position.lerp(targetCamPos.current, 0.05);
      currentLookAt.current.lerp(targetLookAt.current, 0.05);
      camera.lookAt(currentLookAt.current);

      if (autoRotate && modelRootRef.current) {
        modelRootRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [gender, viewerMode]);

  // Local File Drop & Selector Handler
  const handleLoadCustomGLB = (file: File) => {
    if (!file.name.endsWith('.glb') && !file.name.endsWith('.gltf')) {
      alert('Please select a valid .glb or .gltf 3D anatomy model file.');
      return;
    }
    setViewerMode('glb');
    setIsLoading(true);
    setLoadError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target?.result as ArrayBuffer;
      const loader = new GLTFLoader();
      const draco = new DRACOLoader();
      draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
      loader.setDRACOLoader(draco);

      loader.parse(
        contents,
        '',
        (gltf) => {
          if (sceneRef.current && modelRootRef.current) {
            sceneRef.current.remove(modelRootRef.current);
          }
          const model = gltf.scene;
          modelRootRef.current = model;
          if (sceneRef.current) {
            sceneRef.current.add(model);
          }

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 3.6 / (maxDim || 1);
          model.scale.setScalar(scale);
          model.position.sub(center.multiplyScalar(scale));

          let meshCount = 0;
          interactiveMeshesRef.current = [];
          model.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              interactiveMeshesRef.current.push(mesh);
              meshCount++;
            }
          });

          setLoadedMeshCount(meshCount);
          setIsAssetLoaded(true);
          setIsLoading(false);
        },
        () => {
          setIsLoading(false);
          setLoadError('Failed to parse the provided GLB model.');
        }
      );
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="w-full space-y-6">

      {/* Hidden File Input for Custom GLB Loading */}
      <input
        type="file"
        ref={fileInputRef}
        accept=".glb,.gltf"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleLoadCustomGLB(e.target.files[0]);
          }
        }}
      />

      {/* ========================================================================= */}
      {/* SECTION INTRO HEADER */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          {/* Badge: BHMS • Anatomy Learning */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0E86D4]/15 border border-[#38A4F6]/40 text-[#7CC4FA] text-xs font-mono font-semibold tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#38A4F6] animate-pulse"></span>
            <span>BHMS • Anatomy Learning</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Explore Human Anatomy
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-normal">
            An interactive 3D exploration of the human body and its major anatomical structures.
          </p>
        </div>

        {/* MALE / FEMALE SWITCHER */}
        <div className="flex items-center space-x-2 p-1.5 rounded-2xl bg-[#060B18] border border-[#38A4F6]/40 shadow-xl self-start md:self-auto">
          <button
            onClick={() => handleGenderSwitch('male')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 ${gender === 'male'
                ? 'bg-[#0E86D4] text-white shadow-[0_0_18px_rgba(14,134,212,0.6)] border border-[#38A4F6]'
                : 'text-slate-400 hover:text-white'
              }`}
          >
            <span>MALE</span>
          </button>

          <button
            onClick={() => handleGenderSwitch('female')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 ${gender === 'female'
                ? 'bg-rose-500 text-white shadow-[0_0_18px_rgba(244,63,94,0.6)] border border-rose-400'
                : 'text-slate-400 hover:text-white'
              }`}
          >
            <span>FEMALE</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3D VIEWER WORKSPACE: CONTROLS (LEFT) + 3D VIEW (CENTER) + INFO CARD (RIGHT) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: Controls & Cutaway / Layer Switchers */}
        <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">

          {/* Viewer Mode Selector */}
          <div className="p-4 rounded-2xl bg-[#0C1530]/80 backdrop-blur-xl border border-[#38A4F6]/30 shadow-xl space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
              Visualization Mode
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setViewerMode('video')}
                className={`px-2.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center space-x-1.5 ${viewerMode === 'video'
                    ? 'bg-[#0E86D4] text-white border-[#38A4F6] shadow-md'
                    : 'bg-[#060B18] text-slate-300 border-white/5 hover:text-white'
                  }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>3D Video</span>
              </button>
              <button
                onClick={() => setViewerMode('glb')}
                className={`px-2.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center space-x-1.5 ${viewerMode === 'glb'
                    ? 'bg-[#0E86D4] text-white border-[#38A4F6] shadow-md'
                    : 'bg-[#060B18] text-slate-300 border-white/5 hover:text-white'
                  }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>GLB Model</span>
              </button>
            </div>
          </div>

          {/* Anatomy View / Cutaway Selector */}
          <div className="p-4 rounded-2xl bg-[#0C1530]/80 backdrop-blur-xl border border-[#38A4F6]/30 shadow-xl space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
              Anatomy View
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {(['Surface', 'Muscular', 'Internal', 'Skeleton'] as CutawayMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCutawayMode(mode)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all border text-center ${cutawayMode === mode
                      ? 'bg-[#0E86D4] text-white border-[#38A4F6] font-bold shadow-md'
                      : 'bg-[#060B18] text-slate-300 border-white/5 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Hotspot Visibility Toggle (Video Mode) */}
          {viewerMode === 'video' && (
            <div className="p-4 rounded-2xl bg-[#0C1530]/80 backdrop-blur-xl border border-white/10 shadow-xl space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
                Anatomical Markers
              </span>
              <button
                onClick={() => setShowHotspots(!showHotspots)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-mono transition-colors border flex items-center justify-between ${showHotspots ? 'bg-[#0E86D4]/20 border-[#38A4F6] text-[#BAE0FD]' : 'bg-[#080E21] border-white/10 text-slate-400'
                  }`}
              >
                <span>Interactive Hotspots</span>
                <span className="font-bold">{showHotspots ? 'VISIBLE' : 'HIDDEN'}</span>
              </button>
            </div>
          )}

          {/* Layer Visibility Controls */}
          <div className="p-4 rounded-2xl bg-[#0C1530]/80 backdrop-blur-xl border border-white/10 shadow-xl space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
              Layer Controls
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Organs', 'Skeleton', 'Muscles', 'Vessels', 'Nerves', 'Skin'] as LayerVisibility[]).map((layer) => (
                <button
                  key={layer}
                  onClick={() => setActiveLayer(layer)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${activeLayer === layer
                      ? 'bg-white/20 text-white border-white/30 font-bold'
                      : 'bg-[#060B18] text-slate-400 border-white/5 hover:text-white'
                    }`}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>

          {/* Camera Tools */}
          <div className="p-4 rounded-2xl bg-[#0C1530]/80 backdrop-blur-xl border border-white/10 shadow-xl flex items-center justify-between gap-2">
            <button
              onClick={handleResetView}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#080E21] hover:bg-[#101B3A] border border-[#38A4F6]/40 text-xs font-semibold text-[#7CC4FA] hover:text-white transition-all shadow-md"
              title="Return to initial orientation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset View</span>
            </button>

            {viewerMode === 'video' ? (
              <button
                onClick={togglePlay}
                className="px-3 py-1.5 rounded-xl text-xs font-mono border border-white/10 bg-[#080E21] hover:bg-[#101B3A] text-slate-300 flex items-center space-x-1"
              >
                {isVideoPlaying ? <Pause className="w-3 h-3 text-[#38A4F6]" /> : <Play className="w-3 h-3 text-[#38A4F6]" />}
                <span>{isVideoPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>
            ) : (
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-colors ${autoRotate ? 'bg-[#0E86D4]/30 border-[#38A4F6] text-[#BAE0FD]' : 'bg-[#080E21] border-white/10 text-slate-400'
                  }`}
              >
                {autoRotate ? 'Rotate: ON' : 'Rotate: OFF'}
              </button>
            )}
          </div>

          {/* Model Asset Manager Button */}
          <div className="p-3.5 rounded-2xl bg-[#0C1530]/60 border border-white/5 flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-slate-400 truncate">
              {viewerMode === 'video' ? `3D Video Active (${gender.toUpperCase()})` : (isAssetLoaded ? `✓ GLB Model (${loadedMeshCount} meshes)` : 'GLB Pipeline Ready')}
            </span>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1 rounded-lg bg-[#0E86D4]/20 border border-[#38A4F6]/40 text-[#7CC4FA] hover:text-white hover:bg-[#0E86D4] text-[10px] font-mono font-semibold flex items-center space-x-1 shrink-0"
              title="Upload custom .glb anatomical model"
            >
              <Upload className="w-3 h-3" />
              <span>Select GLB</span>
            </button>
          </div>

        </div>

        {/* CENTER COLUMN: Large 3D Human Body Viewport (Optimized 16:9 Stage) */}
        <div
          className="lg:col-span-6 w-full rounded-3xl bg-gradient-to-b from-[#0B132B] via-[#080E21] to-[#060B18] border-2 border-[#38A4F6]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between order-1 lg:order-2 p-4 space-y-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              handleLoadCustomGLB(e.dataTransfer.files[0]);
            }
          }}
        >

          {/* ============================================================== */}
          {/* MODE 1: REAL 3D ANATOMY VIDEO PLAYER (bodymale.mov / female.mov) */}
          {/* ============================================================== */}
          {viewerMode === 'video' && (
            <div className="relative w-full flex flex-col space-y-3">

              {/* Top Video Header: Controls & Status */}
              <div className="flex items-center justify-between px-2 pt-1 pb-1">
                <span className="text-[11px] font-mono text-[#7CC4FA] uppercase font-bold tracking-wider flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>{gender.toUpperCase()} REAL 3D ANATOMICAL VISUALIZATION</span>
                </span>
                
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  1080p HD
                </span>
              </div>

              {/* Active 16:9 Video Stream with Precision Hotspots */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#38A4F6]/40 shadow-2xl bg-black flex items-center justify-center">
                {/* Preloaded Male 3D Video Stream */}
                <video
                  ref={maleVideoRef}
                  src={maleVideoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={gender === 'male' ? handleTimeUpdate : undefined}
                  className={`w-full h-full object-contain filter contrast-105 ${
                    gender === 'male' ? 'block' : 'hidden'
                  }`}
                />

                {/* Preloaded Female 3D Video Stream */}
                <video
                  ref={femaleVideoRef}
                  src={femaleVideoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={gender === 'female' ? handleTimeUpdate : undefined}
                  className={`w-full h-full object-contain filter contrast-105 ${
                    gender === 'female' ? 'block' : 'hidden'
                  }`}
                />

                {/* Precision 16:9 Hotspot Markers Overlay */}
                {showHotspots && (
                  <div className="absolute inset-0 pointer-events-none">
                    {anatomicalHotspots.map((hotspot) => {
                      const isSelected = selectedStructureId === hotspot.id;
                      return (
                        <button
                          key={hotspot.id}
                          onClick={() => handleSelectStructure(hotspot.id)}
                          onMouseEnter={() => setHoveredStructureName(hotspot.name)}
                          onMouseLeave={() => setHoveredStructureName(null)}
                          style={{ top: hotspot.top, left: hotspot.left }}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto p-2 group transition-all duration-300 touch-manipulation cursor-pointer ${
                            isSelected ? 'scale-125' : 'hover:scale-110 active:scale-95'
                          }`}
                          aria-label={hotspot.name}
                        >
                          <span className="relative flex h-3.5 w-3.5">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                              isSelected ? 'bg-cyan-400' : 'bg-[#38A4F6]'
                            }`}></span>
                            <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border border-white shadow-md ${
                              isSelected ? 'bg-cyan-400 shadow-[0_0_10px_#38A4F6]' : 'bg-[#0E86D4]'
                            }`}></span>
                          </span>

                          {/* Tooltip Tag */}
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap px-2 py-0.5 rounded-md bg-[#060B18]/95 border border-[#38A4F6]/60 text-[10px] font-mono text-white shadow-xl pointer-events-none z-30">
                            {hotspot.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Hover Tooltip Pill */}
                {hoveredStructureName && (
                  <div className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-lg bg-[#060B18]/90 border border-[#38A4F6]/60 text-xs font-mono text-[#BAE0FD] shadow-lg pointer-events-none animate-fadeIn">
                    Inspect: <span className="font-bold text-white">{hoveredStructureName}</span>
                  </div>
                )}
              </div>

              {/* Bottom Interactive Video HUD Controller (360° Scrub Bar) */}
              <div className="p-3 bg-[#060B18]/90 rounded-2xl border border-white/10 space-y-2">

                {/* 360-Degree Rotation Scrubber */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span>360° ROTATION DIAL (DRAG TO ROTATE BODY)</span>
                    </span>
                    <span className="font-bold text-[#7CC4FA]">{Math.round(videoProgress * 3.6)}°</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={videoProgress}
                    onChange={handleScrub}
                    className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#38A4F6]"
                  />
                </div>

                {/* Video Playback Controls Bar */}
                <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-slate-300">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={togglePlay}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center space-x-1"
                      title={isVideoPlaying ? 'Pause Rotation' : 'Play Rotation'}
                    >
                      {isVideoPlaying ? <Pause className="w-3.5 h-3.5 text-[#38A4F6]" /> : <Play className="w-3.5 h-3.5 text-[#38A4F6]" />}
                      <span>{isVideoPlaying ? 'PAUSE' : 'PLAY'}</span>
                    </button>

                    <button
                      onClick={handleSpeedChange}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] transition-colors"
                      title="Toggle Rotation Speed"
                    >
                      {playbackSpeed}x SPEED
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    ✓ HEAD-TO-TOE ALIGNED
                  </span>
                </div>

              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* MODE 2: THREE.JS GLTF/GLB MODEL VIEWER */}
          {/* ============================================================== */}
          {viewerMode === 'glb' && (
            <div className="relative w-full h-full flex flex-col justify-between">

              {/* Medical Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-[#080E21]/85 backdrop-blur-md z-30 flex flex-col items-center justify-center space-y-2 transition-all">
                  <Activity className="w-8 h-8 text-[#38A4F6] animate-pulse" />
                  <span className="text-xs font-mono text-[#7CC4FA] tracking-wider font-semibold">
                    Loading Anatomy Model...
                  </span>
                </div>
              )}

              {/* Asset Required State */}
              {!isLoading && !isAssetLoaded && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center space-y-4 pointer-events-auto">
                  <div className="relative z-10 max-w-sm space-y-3 p-6 rounded-3xl bg-[#0C1530]/90 border border-[#38A4F6]/40 shadow-2xl backdrop-blur-xl">
                    <div className="w-12 h-12 rounded-2xl bg-[#0E86D4]/20 border border-[#38A4F6]/40 flex items-center justify-center mx-auto text-[#7CC4FA]">
                      <FileCode className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="font-editorial text-xl font-normal text-white">
                        GLB 3D Pipeline Ready
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Ready to render direct GLB/GLTF anatomical meshes.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#060B18] border border-white/10 text-left space-y-1">
                      <span className="text-[10px] font-mono text-[#7CC4FA] font-bold block">
                        Target File Path:
                      </span>
                      <code className="text-[11px] font-mono text-emerald-300 block truncate">
                        {gender === 'male' ? ANATOMY_CONFIG.male.assetPath : ANATOMY_CONFIG.female.assetPath}
                      </code>
                    </div>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full px-4 py-2 rounded-xl bg-[#0E86D4] hover:bg-[#0A6EB0] text-white text-xs font-semibold font-mono tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Select Local .GLB</span>
                    </button>
                  </div>
                </div>
              )}

              {/* WebGL Canvas Container */}
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

              {/* Bottom Viewport Hint */}
              <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[10px] font-mono text-slate-400 pointer-events-none z-10">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Drag to rotate 360° • Scroll / Pinch to zoom</span>
                </span>
                <span>{gender.toUpperCase()} GLB MODEL</span>
              </div>

            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Floating Glassmorphism Information Card */}
        <div className="lg:col-span-3 w-full space-y-4 order-3">

          {selectedStructure ? (
            <div className="p-6 rounded-3xl bg-[#0C1530]/85 backdrop-blur-2xl border border-[#38A4F6]/40 shadow-2xl space-y-4 relative animate-fadeIn">

              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="px-3 py-1 rounded-full bg-[#0E86D4]/20 border border-[#38A4F6]/30 text-[10px] font-mono font-bold uppercase tracking-wider text-[#7CC4FA]">
                  {selectedStructure.system} SYSTEM
                </span>
                <button
                  onClick={() => setSelectedStructureId(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Structure Name */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
                  {selectedStructure.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedStructure.description}
                </p>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-[#060B18]/70 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
                  Location:
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  {selectedStructure.location}
                </p>
              </div>

              {/* Primary Function */}
              <div className="p-3.5 rounded-2xl bg-[#060B18]/70 border border-emerald-500/20 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                  Primary Function:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedStructure.function}
                </p>
              </div>

              {/* Educational Notice */}
              <p className="text-[10px] text-slate-400 italic pt-1 border-t border-white/10">
                BHMS 2nd-year anatomical study reference. Non-diagnostic.
              </p>

            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-[#0C1530]/60 backdrop-blur-xl border border-white/10 text-center space-y-3">
              <Info className="w-8 h-8 text-[#7CC4FA] mx-auto opacity-70" />
              <h4 className="font-editorial text-lg text-white font-medium">
                Select an Anatomical Structure
              </h4>
              <p className="text-xs text-slate-300">
                Click any organ, bone, or muscle marker in the viewer to examine its anatomical position, relations, and physiological functions.
              </p>
            </div>
          )}

          {/* Quick Select Index */}
          <div className="p-4 rounded-2xl bg-[#0C1530]/60 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
              Selectable Structures Index:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto scrollbar-thin">
              {Object.values(ANATOMICAL_STRUCTURES_DATA)
                .filter((s) => (activeSystem === 'ALL' || s.system === activeSystem) && (s.gender === 'both' || s.gender === gender))
                .map((struct) => (
                  <button
                    key={struct.id}
                    onClick={() => handleSelectStructure(struct.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors border ${selectedStructureId === struct.id
                        ? 'bg-[#0E86D4] text-white border-[#38A4F6] font-bold shadow-sm'
                        : 'bg-[#060B18] text-slate-300 border-white/5 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {struct.name}
                  </button>
                ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM CONTROL BAR: ANATOMICAL SYSTEM NAVIGATION BAR */}
      {/* ========================================================================= */}
      <div className="p-3.5 rounded-2xl bg-[#0C1530]/90 backdrop-blur-xl border border-[#38A4F6]/30 shadow-xl overflow-x-auto scrollbar-thin">
        <div className="flex items-center space-x-2 min-w-max">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-2">
            Systems:
          </span>
          {ANATOMY_SYSTEMS_LIST.map((sys) => {
            const isSelected = activeSystem === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveSystem(sys.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all border ${isSelected
                    ? 'bg-[#0E86D4] text-white border-[#38A4F6] shadow-[0_0_15px_rgba(14,134,212,0.5)]'
                    : 'bg-[#060B18] text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                  }`}
              >
                {sys.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
