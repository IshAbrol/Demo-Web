import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingCube({ color }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.7;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe={false}
        transparent
        opacity={0.8}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

const Interactive3DCard = ({ color = '#ff3131' }) => {
  return (
    <div className="w-full h-32 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <RotatingCube color={color} />
      </Canvas>
    </div>
  );
};

export default Interactive3DCard;
