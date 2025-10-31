import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from './DecorativeElements';

const ReplayCard: React.FC = () => {
    return (
        <motion.div className="rounded-2xl overflow-hidden group relative" whileHover={{y: -5}}>
            <img src="https://images.unsplash.com/photo-1516116216624-53e697302047?q=80&w=2070&auto=format&fit=crop" className="w-full h-32 object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-0 group-hover:opacity-100" />
            <p className="absolute bottom-2 left-3 text-white text-sm font-bold">AI Business Models</p>
            <span className="absolute top-2 right-2 text-xs bg-green-500 text-white font-semibold py-0.5 px-2 rounded-full">Recorded</span>
        </motion.div>
    );
};

export default ReplayCard;
