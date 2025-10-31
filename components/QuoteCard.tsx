import React from 'react';
import { motion } from 'framer-motion';
import type { Quote } from '../types';

export const QuoteCard: React.FC<Quote> = ({ text, author }) => {
    return (
        <motion.div
            className="bg-white/50 p-6 rounded-3xl border border-gray-200 h-full flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                 <span className="absolute -top-4 -left-3 text-6xl text-[#E97A41]/20 font-serif">“</span>
                 <p className="text-lg font-medium text-[#1E1E1E] z-10 relative">"{text}"</p>
            </div>
            <p className="mt-4 text-right font-semibold text-[#00334F]">– {author}</p>
        </motion.div>
    );
};
