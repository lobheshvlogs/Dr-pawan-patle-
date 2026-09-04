import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface InteractiveDNA3DProps {
  className?: string;
}

export const InteractiveDNA3D: React.FC<InteractiveDNA3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // Create realistic double helix with connecting rungs
    const strandCount = 28;
    const radius = 1.3;
    const heightSpread = 5.6;
    const turns = 2.2;

    const sphereGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const cylinderGeo = new THREE.CylinderGeometry(0.02, 0.02, 1, 8);

    const matStrandA = new THREE.MeshPhysicalMaterial({
      color: 0x38A4F6,
      emissive: 0x055C9D,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 0.5,
    });

    const matStrandB = new THREE.MeshPhysicalMaterial({
      color: 0x7CC4FA,
      emissive: 0x0284C7,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 0.5,
    });

    const matRung = new THREE.MeshStandardMaterial({
      color: 0xBAE0FD,
      roughness: 0.4,
      metalness: 0.5,
      transparent: true,
      opacity: 0.85,
    });

    for (let i = 0; i < strandCount; i++) {
      const progress = i / strandCount;
      const angle = progress * Math.PI * 2 * turns;
      const y = (progress - 0.5) * heightSpread;

      // Strand A node
      const xA = Math.cos(angle) * radius;
      const zA = Math.sin(angle) * radius;
      const sphereA = new THREE.Mesh(sphereGeo, matStrandA);
      sphereA.position.set(xA, y, zA);
      dnaGroup.add(sphereA);

      // Strand B node (180 deg offset)
      const xB = Math.cos(angle + Math.PI) * radius;
      const zB = Math.sin(angle + Math.PI) * radius;
      const sphereB = new THREE.Mesh(sphereGeo, matStrandB);
      sphereB.position.set(xB, y, zB);
      dnaGroup.add(sphereB);

      // Connecting hydrogen bond rung
      const rung = new THREE.Mesh(cylinderGeo, matRung);
      rung.position.set((xA + xB) / 2, y, (zA + zB) / 2);
      rung.scale.set(1, radius * 2, 1);
      rung.rotation.z = Math.PI / 2;
      rung.rotation.y = -angle;
      dnaGroup.add(rung);
    }

    // Ambient floating glow particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePositions[p] = (Math.random() - 0.5) * 6;
      particlePositions[p + 1] = (Math.random() - 0.5) * 6;
      particlePositions[p + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38A4F6,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x38A4F6, 3.5, 20);
    pointLightCyan.position.set(4, 3, 4);
    scene.add(pointLightCyan);

    const pointLightBlue = new THREE.PointLight(0x0052CC, 2.5, 20);
    pointLightBlue.position.set(-4, -3, -2);
    scene.add(pointLightBlue);

    // Mouse interactive rotation
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0.2;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY += normX * 0.005;
        targetRotationX += normY * 0.005;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous slow majestic rotation
      targetRotationY += 0.008;

      dnaGroup.rotation.y += (targetRotationY - dnaGroup.rotation.y) * 0.1;
      dnaGroup.rotation.x += (targetRotationX - dnaGroup.rotation.x) * 0.1;

      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative cursor-grab active:cursor-grabbing select-none ${className}`}
      title="Click and drag to rotate the 3D DNA Model"
    >
      <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#0B132B]/80 backdrop-blur-md border border-[#38A4F6]/30 text-[10px] font-mono text-[#7CC4FA] pointer-events-none flex items-center space-x-1.5 shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#38A4F6] animate-pulse"></span>
        <span>Interactive 3D • Drag to Rotate</span>
      </div>
    </div>
  );
};
