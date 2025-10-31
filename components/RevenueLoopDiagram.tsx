import React from 'react';
import { motion } from 'framer-motion';

const circleData = [
    { cx: 45, cy: 30, r: 25, color: '#00334F' },
    { cx: 70, cy: 55, r: 25, color: '#E97A41' },
    { cx: 30, cy: 60, r: 25, color: '#F3B93C' },
];

export const RevenueLoopDiagram: React.FC = () => {
    return (
        <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
                <filter id="subtle-glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {circleData.map((circle, i) => (
                <motion.circle
                    key={i}
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                    fill={circle.color}
                    opacity={0.6}
                    filter="url(#subtle-glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                />
            ))}
        </motion.svg>
    );
};
