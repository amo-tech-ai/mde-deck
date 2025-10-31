import React from 'react';
import { motion } from 'framer-motion';

export const ColombiaMap: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: "drop-shadow(0 4px 6px rgba(0, 51, 79, 0.2))" }}>
        <defs>
          <radialGradient id="medellinGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#E97A41" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#00334F" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00334F" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Simplified Colombia Outline */}
        <path
          d="M100 10 C 130 20, 160 50, 150 90 S 130 150, 100 180 S 70 150, 50 90 S 70 20, 100 10 Z"
          fill="#00334F"
          fillOpacity="0.1"
          stroke="#00334F"
          strokeWidth="1"
        />
        
        {/* Medellín Marker */}
        <circle cx="95" cy="80" r="25" fill="url(#medellinGlow)" />
        <circle cx="95" cy="80" r="5" fill="#E97A41" stroke="#FBF6F1" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
};
