import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from './DecorativeElements';

const features = [
    { name: 'Pitch Deck Creation', traditional: 'Manual (10+ hrs)', mde: true },
    { name: 'Business Plan', traditional: 'Static templates', mde: true },
    { name: 'Job Discovery', traditional: 'Scattered platforms', mde: true },
    { name: 'Community', traditional: 'Fragmented groups', mde: true },
    { name: 'Learning', traditional: 'Limited content', mde: true },
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i:number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } }),
};

export const ComparisonTable: React.FC = () => {
    return (
        <div className="w-full bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#00334F] mb-6 text-center">Why MDE.AI Stands Apart</h3>
            <div className="grid grid-cols-3 gap-y-4 items-center text-sm">
                {/* Headers */}
                <div className="font-semibold text-[#6E6E6E]">Feature</div>
                <div className="font-semibold text-[#6E6E6E] text-center">Traditional Tools</div>
                <div className="font-semibold text-[#00334F] text-center">MDE.AI</div>

                {/* Rows */}
                {features.map((feature, i) => (
                    <React.Fragment key={feature.name}>
                        <motion.div custom={i} variants={itemVariants} className="font-semibold text-[#1E1E1E]">{feature.name}</motion.div>
                        <motion.div custom={i} variants={itemVariants} className="text-center text-[#6E6E6E]">{feature.traditional}</motion.div>
                        <motion.div custom={i} variants={itemVariants} className="flex justify-center">
                            <div className="w-6 h-6 bg-green-200 text-green-800 rounded-full flex items-center justify-center">
                                <CheckIcon className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
