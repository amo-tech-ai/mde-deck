import React from 'react';
import { motion } from 'framer-motion';
import { BrainIcon } from './DecorativeElements'; // Example

const TopicCard: React.FC = () => {
    return (
        <motion.div
            className="bg-[#00334F]/5 p-6 rounded-2xl text-center flex flex-col items-center justify-center"
            whileHover={{ y: -5, backgroundColor: 'rgba(0, 51, 79, 0.1)'}}
        >
            <BrainIcon className="w-8 h-8 text-[#00334F] mb-3" />
            <h4 className="font-bold text-[#1E1E1E]">Generative AI & LLMs</h4>
        </motion.div>
    );
};

export default TopicCard;
