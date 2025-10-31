import React from 'react';
import { motion } from 'framer-motion';
import type { CandidateBenefitCardProps } from '../types';

export const CandidateBenefitCard: React.FC<CandidateBenefitCardProps> = ({ icon, title, description }) => {
    return (
        <motion.div
            className="bg-white/5 p-8 rounded-3xl text-center"
            whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#E97A41] to-[#F3B93C]">
                {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8 text-white' })}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-white/80">{description}</p>
        </motion.div>
    );
};
