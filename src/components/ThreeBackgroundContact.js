import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function PulsingWaves() {
  const ref = useRef();

  const particles = useMemo(() => {
    const temp = [];
    const size = 15;
    const segments = 30;

    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < segments; j++) {
        const x = (i / segments - 0.5) * size;
        const z = (j / segments - 0.5) * size;
        temp.push(x, 0, z);
      }
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array;
      let i = 0;
      const size = 15;
      const segments = 30;

      for (let ix = 0; ix < segments; ix++) {
        for (let iz = 0; iz < segments; iz++) {
          const x = (ix / segments - 0.5) * size;
          const z = (iz / segments - 0.5) * size;

          positions[i + 1] = Math.sin(x + time) * Math.cos(z + time) * 2;
          i += 3;
        }
      }

      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = time * 0.1;
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
        opacity={0.7}
      />
    </Points>
  );
}

function RotatingTorus() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.3;
      mesh.current.rotation.y = time * 0.2;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -3]}>
      <torusGeometry args={[2, 0.5, 16, 50]} />
      <meshStandardMaterial
        color="#ff3131"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

const ThreeBackgroundContact = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1 : 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff3131" />

          <PulsingWaves />
          {!isMobile && <RotatingTorus />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundContact;
