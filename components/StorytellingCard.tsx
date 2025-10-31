import React from 'react';
import { motion } from 'framer-motion';
import type { StorytellingCardProps } from '../types';

export const StorytellingCard: React.FC<StorytellingCardProps> = ({ title, description, imageUrl, icon }) => {
    return (
        <motion.div
            className="relative w-full h-80 rounded-3xl overflow-hidden group"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00334F] via-[#00334F]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="mb-2">{icon}</div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-white/80">{description}</p>
            </div>
        </motion.div>
    );
};