import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, type Variants } from 'framer-motion';
import { BrainIcon, ChartIcon, NetworkIcon } from './DecorativeElements';

// FIX: Added Variants type to ensure correct type checking for framer-motion props.
const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// FIX: Added Variants type to ensure correct type checking for framer-motion props.
const circleVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

// FIX: Added Variants type to ensure correct type checking for framer-motion props.
const lineVariants: Variants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.5 } },
};

export const AiWorkflowDiagram: React.FC = () => {
    const radius = 120;
    const center = { x: 150, y: 150 };
    const modules = [
        { name: "AI Pitch Generator", icon: <BrainIcon className="w-8 h-8 text-white"/>, color: "#00334F", angle: -30 },
        { name: "AI Business Plan Engine", icon: <ChartIcon className="w-8 h-8 text-white"/>, color: "#E97A41", angle: 90 },
        { name: "AI Matching System", icon: <NetworkIcon className="w-8 h-8 text-white"/>, color: "#F3B93C", angle: 210 },
    ];

    return (
        <motion.div 
            className="relative w-[300px] h-[300px]"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
        >
            <svg className="absolute inset-0" viewBox="0 0 300 300">
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                 {modules.map(m => {
                    const x = center.x + radius * Math.cos(m.angle * Math.PI / 180);
                    const y = center.y + radius * Math.sin(m.angle * Math.PI / 180);
                    return <motion.line key={m.name} x1={center.x} y1={center.y} x2={x} y2={y} stroke={m.color} strokeWidth="2" strokeDasharray="3 3" variants={lineVariants} />;
                })}
            </svg>
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white border-4 border-[#00334F] rounded-full flex flex-col items-center justify-center text-center p-2 shadow-2xl"
                variants={circleVariants}
            >
                <h3 className="font-bold text-[#00334F]">Founder Dashboard</h3>
            </motion.div>

            {modules.map(m => {
                const x = center.x + radius * Math.cos(m.angle * Math.PI / 180);
                const y = center.y + radius * Math.sin(m.angle * Math.PI / 180);

                return (
                    <motion.div
                        key={m.name}
                        className="absolute w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor: m.color,
                            top: y - 40,
                            left: x - 40,
                            filter: 'url(#glow)'
                        }}
                         variants={circleVariants}
                    >
                       {m.icon}
                    </motion.div>
                )
            })}
        </motion.div>
    );
};