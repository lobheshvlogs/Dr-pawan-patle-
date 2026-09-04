import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface MedicalScene3DProps {
  className?: string;
}

export const MedicalScene3D: React.FC<MedicalScene3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the 3D medical structure
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Core - Abstract Medical Cross / Molecular Hub
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x38A4F6,
      emissive: 0x0A1128,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // 2. Orbital Rings - Representing medical equilibrium & holistic systems
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x7CC4FA,
      transparent: true,
      opacity: 0.4,
      wireframe: true
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.02, 16, 100), ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.02, 16, 100), ringMaterial);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 3. Floating Molecular Nodes
    const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xBAE0FD,
      emissive: 0x055C9D,
      roughness: 0.3,
      metalness: 0.8,
    });

    const nodesCount = 12;
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < nodesCount; i++) {
      const node = new THREE.Mesh(sphereGeo, sphereMat);
      const angle = (i / nodesCount) * Math.PI * 2;
      const radius = 2.0;
      node.position.set(
        Math.cos(angle) * radius,
        (Math.sin(i * 2) * 0.8),
        Math.sin(angle) * radius
      );
      group.add(node);
      nodes.push(node);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38A4F6, 2.5, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const softBlueLight = new THREE.PointLight(0x003060, 1.5, 50);
    softBlueLight.position.set(-5, -5, -2);
    scene.add(softBlueLight);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth) * 2 - 1;
      mouseY = -(event.clientY / innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.5;
      targetRotationX = -mouseY * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle rotations
      coreMesh.rotation.y = elapsedTime * 0.2;
      coreMesh.rotation.x = elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.x = elapsedTime * 0.12;

      // Pulse nodes slightly
      nodes.forEach((node, idx) => {
        node.position.y += Math.sin(elapsedTime * 2 + idx) * 0.003;
      });

      // Smooth mouse easing
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
