import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const Frame = ({ position, image }) => {
  const ref = useRef();

  // Load the texture
  const texture = useTexture(image);

  // Animation for the frame
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t / 2) * 0.1;
    ref.current.rotation.x = Math.cos(t / 2) * 0.1;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[3, 2, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Stars = () => {
  const ref = useRef();
  const starPositions = Array.from({ length: 500 }, () => [
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      ref.current.rotation.x = scrollY * 0.001;
      ref.current.rotation.y = scrollY * 0.001;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <group ref={ref}>
      {starPositions.map((pos, index) => (
        <mesh key={index} position={pos}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const Scene = () => {
  const frames = [
    { position: [-5, 2, -10], image: "./assets/1.jpg" },
    { position: [0, 0, -8], image: "./assets/2.jpg" },
    { position: [5, -2, -10], image: "./assets/3.jpg" },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      {frames.map((frame, index) => (
        <Frame key={index} position={frame.position} image={frame.image} />
      ))}
    </>
  );
};

const LandingPage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", overflowY: "scroll" }}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
      {/* <div style={{ height: "1000vh" }}></div> Add extra height for scrolling */}
    </div>
  );
};

export default LandingPage;
