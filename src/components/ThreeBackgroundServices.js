import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function FloatingGrid() {
  const ref = useRef();

  const particles = useMemo(() => {
    const temp = [];
    const size = 10;
    const divisions = 20;

    for (let i = 0; i <= divisions; i++) {
      for (let j = 0; j <= divisions; j++) {
        const x = (i / divisions - 0.5) * size;
        const z = (j / divisions - 0.5) * size;
        const y = 0;
        temp.push(x, y, z);
      }
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = time * 0.1;
      ref.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff3131"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingSpheres() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = time * 0.2;

      // Animate each sphere's position
      group.current.children.forEach((child, i) => {
        if (child.isMesh) {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 4;
          child.position.set(
            Math.cos(angle) * radius,
            Math.sin(time + i) * 0.5,
            Math.sin(angle) * radius
          );
        }
      });
    }
  });

  return (
    <group ref={group}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 4;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              0,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color="#ff3131"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

const ThreeBackgroundServices = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1 : 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#ff3131" />

          <FloatingGrid />
          {!isMobile && <FloatingSpheres />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundServices;
