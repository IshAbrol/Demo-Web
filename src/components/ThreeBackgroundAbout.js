import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleRing() {
  const ref = useRef();

  const particles = useMemo(() => {
    const temp = [];
    const radius = 5;
    for (let i = 0; i < 500; i++) {
      const angle = (i / 500) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 2;
      const z = Math.sin(angle) * radius;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = time * 0.3;
      ref.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff3131"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function ConnectedCubes() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = time * 0.15;
      group.current.rotation.x = time * 0.1;
    }
  });

  return (
    <group ref={group}>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 1,
              Math.sin(angle) * radius
            ]}
          >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
              color="#ff3131"
              wireframe
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

const ThreeBackgroundAbout = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1 : 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff3131" />

          <ParticleRing />
          {!isMobile && <ConnectedCubes />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundAbout;
