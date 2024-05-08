import React, { Suspense, useEffect, useRef } from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useMotion } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import CanvasLoader from "../Loader";
import { useMotionValue } from "framer-motion";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const mouse = {
    x:useMotionValue(0),
    y:useMotionValue(0)
  }

  const manageMouseMove = (e)=>{
    const {innerWidth,innerHeight} = window;
    const {clientX,clientY} = e;
    const x = -0.5 + (clientX/innerWidth);
    const y = -0.5 +(clientY/innerHeight);
    mouse.x.set(x);
    mouse.y.set(y);
  
  }
  useEffect(()=>{
    window.addEventListener('mousemove',manageMouseMove)
    return ()=> window.removeEventListener('mousemove',manageMouseMove)
  })

  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
  // });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} color={'#537EC5'}/>
      <motion.mesh castShadow receiveShadow scale={2.75} ref={meshRef} rotation-x={mouse.y} rotation-y={mouse.x}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </motion.mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;