import React from 'react';
import { motion } from 'framer-motion';
import { BrainIcon, IdeaIcon, NetworkIcon, RocketIcon, WorldIcon } from './DecorativeElements';

const categories = [
    { name: 'Conferences', icon: <BrainIcon className="w-6 h-6"/> },
    { name: 'Workshops', icon: <IdeaIcon className="w-6 h-6"/> },
    { name: 'Networking', icon: <NetworkIcon className="w-6 h-6"/> },
    { name: 'Startups', icon: <RocketIcon className="w-6 h-6"/> },
    { name: 'AI for Good', icon: <WorldIcon className="w-6 h-6"/> },
];

export const CategoryButtons: React.FC = () => {
    return (
        <div className="flex justify-center items-center gap-8 flex-wrap">
            {categories.map((category, i) => (
                <motion.button
                    key={category.name}
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="w-16 h-16 rounded-full border-2 border-[#00334F]/20 flex items-center justify-center text-[#00334F] transition-colors duration-300 group-hover:bg-[#00334F]/10 group-hover:border-[#E97A41]">
                        {category.icon}
                    </div>
                    <span className="font-semibold text-sm text-[#00334F]">{category.name}</span>
                </motion.button>
            ))}
        </div>
    );
};