import React, { Suspense, useEffect, useState } from "react";
import { Canvas ,useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "../Loader";
import { AnimationMixer } from 'three';

let mixer = true; 
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./nepal/scene.gltf");

  useEffect(() => {
    const model = computer.scene;
    const animations = computer.animations;

    if (model && animations && mixer === true) {
      mixer = new AnimationMixer(model);

      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [computer]);

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.55}   />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        
      />
      <pointLight intensity={5}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 1.75}
        position={isMobile ? [-3, -1, -2.2] : [1, -1.25, -1.5]}
        rotation={[0.0, -11, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('./nepal/scene.gltf', (computer) => {
      const model = computer.scene;
      const animations = computer.animations;

      if (model && animations && mixer === null) {
        mixer = new AnimationMixer(model);

        const action = mixer.clipAction(animations[0]);
        action.play();
      }
    });
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    
    setIsMobile(mediaQuery.matches);
    
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
    
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;