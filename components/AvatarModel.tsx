"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Group } from "three";

interface TargetRotation {
  x: number;
  y: number;
}

interface AvatarModelProps {
  targetRotation: TargetRotation;
}

function AvatarModel({ targetRotation }: AvatarModelProps) {
  const gltf = useGLTF("/models/avatar2.glb"); // put avatar.glb in public folder

  const meshRef = useRef<Group>(null);
  const currentRotation = useRef({ x: 0, y: 0 });
  
  useFrame(() => {
    if (meshRef.current) {
      // Smooth interpolation to target rotation
      const lerpFactor = 0.05; // Adjust for smoothness (lower = smoother)
      
      currentRotation.current.x += (targetRotation.x - currentRotation.current.x) * lerpFactor;
      currentRotation.current.y += (targetRotation.y - currentRotation.current.y) * lerpFactor;
      
      meshRef.current.rotation.x = currentRotation.current.x;
      meshRef.current.rotation.y = currentRotation.current.y;
    }
  });

  return <primitive ref={meshRef} object={gltf.scene} />;
}

export default function AvatarViewer() {

  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize mouse position to -1 to 1 range
    const x = (event.clientX - centerX) / (rect.width / 2);
    const y = (event.clientY - centerY) / (rect.height / 2);
    
    // Only start moving when mouse is past halfway point (threshold)
    const threshold = 0.3; // Adjust this value (0.1 to 0.5 works well)
    
    let adjustedX = 0;
    let adjustedY = 0;
    
    // Horizontal movement
    if (Math.abs(x) > threshold) {
      adjustedX = (Math.abs(x) - threshold) / (1 - threshold) * Math.sign(x);
    }
    
    // Vertical movement
    if (Math.abs(y) > threshold) {
      adjustedY = (Math.abs(y) - threshold) / (1 - threshold) * Math.sign(y);
    }
    
    setTargetRotation({ 
      x: adjustedY * 0.15, // Adjust multiplier for sensitivity
      y: adjustedX * 0.4   // Adjust multiplier for sensitivity
    });
  };

  // Remove the handleMouseLeave function or make it optional
  const handleMouseLeave = () => {
    // Comment out or remove this line to retain position
    // setTargetRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: [0, -5, 0], // This creates the floating effect
      }}
      transition={{
        opacity: { duration: 1.6, ease: "easeInOut" },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className="w-[600px] h-[600px] rounded-full overflow-hidden bg-transparent mask-fade-2 relative z-50"
      style={{ boxShadow: "0 0 0 1px transparent" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      <Canvas
        camera={{ position: [-0.8, 0.8, 3], fov: 10 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "rgba(0,0,0,0)" }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={1} adjustCamera={false}>
            <AvatarModel  targetRotation={targetRotation} />
          </Stage>
          <OrbitControls enableZoom={false} target={[0, 0.7, 0]} />
        </Suspense>
      </Canvas>

      {/* Multi-directional fade overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Bottom fade - strongest */}
        {/* <div
          className="absolute inset-x-0 bottom-0 h-[10%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 8%, rgba(0,0,0,0.3) 40%, transparent 100%)",
          }}
        /> */}

        {/* Left and right side fades */}
        {/* <div
          className="absolute inset-y-0 left-0 w-[20%]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[20%]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, transparent 100%)",
          }}
        /> */}
      </div>
    </motion.div>
  );
}
