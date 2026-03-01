import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function StarField() {
  const ref = useRef();

  // Generate random star positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  // Animate stars rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff3131"
          size={0.5}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2;
      mesh.current.rotation.y = time * 0.3;
      mesh.current.position.y = Math.sin(time) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={[3, 0, -5]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#ff3131"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function FloatingBox() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.15;
      mesh.current.rotation.z = time * 0.25;
      mesh.current.position.y = Math.cos(time * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={[-3, 0, -5]}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#ff5555"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function AnimatedSphere() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.1;
      mesh.current.position.x = Math.sin(time * 0.3) * 2;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -8]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#ff3131"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

const ThreeBackground = () => {
  // Check if mobile device for performance optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1 : 2]} // Lower quality on mobile
        performance={{ min: 0.5 }} // Performance monitoring
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff3131" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

          <StarField />
          {!isMobile && (
            <>
              <FloatingGeometry />
              <FloatingBox />
              <AnimatedSphere />
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
