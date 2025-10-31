import React from 'react';
import { motion } from 'framer-motion';
import type { SpeakerProps } from '../types';

export const SpeakerCard: React.FC<SpeakerProps> = ({ photo, name, title, organization, topic, date }) => {
    return (
        <motion.div
            className="bg-white/60 border border-gray-200 p-6 rounded-3xl text-center"
            whileHover={{ y: -5 }}
        >
            <img src={photo} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="font-extrabold text-[#00334F] text-lg">{name}</h3>
            <p className="text-sm text-[#6E6E6E]">{title}, {organization}</p>
            <div className="my-4 h-px bg-gray-200" />
            <p className="font-semibold text-[#1E1E1E] text-sm">{topic}</p>
            <p className="text-xs text-[#6E6E6E] mt-1">{date}</p>
            <button className="mt-6 w-full bg-transparent border-2 border-[#E97A41] text-[#E97A41] font-bold py-2 rounded-full transition-colors hover:bg-[#E97A41] hover:text-white">
                Register
            </button>
        </motion.div>
    );
};
