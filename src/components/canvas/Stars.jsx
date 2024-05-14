import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion-3d";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

 
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

  return (
    <motion.group rotation-x={mouse.y} rotation-y={mouse.x}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </motion.group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          enableDamping
        />
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
      
    </div>
  );
};

export default StarsCanvas;