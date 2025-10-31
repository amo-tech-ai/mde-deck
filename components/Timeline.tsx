import React from 'react';
import { motion } from 'framer-motion';
import type { TimelineItem } from '../types';

interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative pl-8">
            <div className="absolute left-3.5 top-0 h-full w-0.5 bg-[#00334F]/20" />
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className="relative mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="absolute -left-[29px] top-1 w-6 h-6 rounded-full bg-[#E97A41] border-4 border-[#FBF6F1]" />
                    <div className="font-bold text-sm text-[#E97A41]">{item.quarter}</div>
                    <p className="font-semibold text-[#00334F]">{item.event}</p>
                </motion.div>
            ))}
        </div>
    );
};
