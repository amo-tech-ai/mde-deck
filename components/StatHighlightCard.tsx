import React from 'react';
import { motion } from 'framer-motion';
import type { StatHighlightCardProps } from '../types';

export const StatHighlightCard: React.FC<StatHighlightCardProps> = ({ value, label, source, icon, color }) => {
    return (
        <motion.div
            className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-gray-200 text-center"
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
        >
            <div className="relative inline-block">
                <div className="absolute -inset-2 rounded-full opacity-20" style={{ backgroundColor: color }} />
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: color }}>
                    {icon}
                </div>
            </div>
            <div className="mt-4 text-5xl font-extrabold text-[#00334F]">{value}</div>
            <div className="mt-1 font-semibold text-[#1E1E1E]">{label}</div>
            <div className="mt-2 text-xs text-[#6E6E6E]">{source}</div>
        </motion.div>
    );
};
