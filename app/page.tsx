"use client";

import { useState, useEffect } from "react";
import MatrixBackground from "@/components/MatrixBackground";
import { SpotlightPreview } from "@/components/Spotlight";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showMatrix, setShowMatrix] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMatrix(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {showMatrix ? (
          <motion.div
            key="matrix"
            className="fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <MatrixBackground />
          </motion.div>
        ) : (
          <motion.div
            key="spotlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SpotlightPreview />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}