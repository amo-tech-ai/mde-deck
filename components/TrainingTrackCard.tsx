import React from 'react';
import { motion } from 'framer-motion';
import type { TrainingTrackCardProps } from '../types';

export const TrainingTrackCard: React.FC<TrainingTrackCardProps> = ({ icon, title, description, color }) => {
    const colorClasses = {
        'deep-blue': 'bg-[#00334F] text-white',
        'off-white': 'bg-white/60 border border-gray-200 text-[#1E1E1E]',
    };

    return (
        <motion.div
            className={`p-6 rounded-3xl h-full ${colorClasses[color]}`}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
            <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center ${color === 'deep-blue' ? 'bg-white/10' : 'bg-[#00334F]/10'}`}>
                {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 ' + (color === 'deep-blue' ? 'text-white' : 'text-[#00334F]') })}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className={`text-sm ${color === 'deep-blue' ? 'text-white/80' : 'text-[#6E6E1E]'}`}>{description}</p>
        </motion.div>
    );
};
