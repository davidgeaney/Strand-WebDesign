'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

function Ocean() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  
  useEffect(() => {
    if (camera && meshRef.current) {
      camera.position.set(0, 10, 20);
      gsap.to(camera.position, {
        y: 5,
        duration: 2,
        ease: 'power2.inOut'
      });
    }
  }, [camera]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Animate ocean waves
      const time = state.clock.getElapsedTime();
      const position = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        
        // Create wave effect
        const waveX1 = Math.sin(time * 0.7 + x * 0.2) * 0.5;
        const waveX2 = Math.sin(time * 0.3 + x * 0.4) * 0.3;
        const waveY1 = Math.cos(time * 0.7 + y * 0.2) * 0.5;
        const waveY2 = Math.cos(time * 0.3 + y * 0.4) * 0.3;
        
        position.setZ(i, waveX1 + waveX2 + waveY1 + waveY2);
      }
      
      position.needsUpdate = true;
    }
  });

  return (
    <Plane
      ref={meshRef}
      args={[50, 50, 128, 128]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
    >
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.6}
        roughness={0.2}
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </Plane>
  );
}

export default function OceanScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Ocean />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
