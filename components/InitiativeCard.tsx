import React from 'react';
import { motion } from 'framer-motion';
import type { InitiativeCardProps } from '../types';

export const InitiativeCard: React.FC<InitiativeCardProps> = ({ title, description, icon, bgColor }) => {
    const isDark = bgColor === 'bg-[#00334F]';
    return (
        <motion.div
            className={`p-6 rounded-3xl text-center ${bgColor} ${isDark ? 'text-white' : 'text-[#1E1E1E]'}`}
            whileHover={{ y: -5 }}
        >
            <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-white/10' : 'bg-[#00334F]/10'}`}>
                {/* FIX: Check if icon is a valid React element and cast to React.ReactElement<any> to allow adding a className prop. */}
                {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, { className: `w-6 h-6 ${isDark ? 'text-white' : 'text-[#00334F]'}` })}
            </div>
            <h3 className="font-bold">{title}</h3>
            <p className={`text-sm mt-1 ${isDark ? 'text-white/80' : 'text-[#6E6E6E]'}`}>{description}</p>
        </motion.div>
    );
};
