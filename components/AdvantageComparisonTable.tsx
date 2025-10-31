import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from './DecorativeElements';

const features = [
    { name: 'Creation Time', traditional: '10+ hours', mde: '<1 hour' },
    { name: 'Design Quality', traditional: 'Inconsistent', mde: 'Consistent & Branded' },
    { name: 'Storytelling', traditional: 'Founder-written', mde: 'AI-optimized' },
    { name: 'Collaboration', traditional: 'Limited', mde: 'Real-time & Shareable' },
    { name: 'Analytics', traditional: 'None', mde: 'Built-in Viewer Tracking' },
];

const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
};

export const AdvantageComparisonTable: React.FC = () => {
    return (
        <div className="w-full bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-[#00334F] mb-4">A 10x Better Experience</h3>
                    <p className="text-[#6E6E6E]">MDE.AI's generator streamlines every step of the creation process, saving founders time and delivering a superior, investor-ready result.</p>
                </div>
                <div className="space-y-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.name}
                            custom={i}
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-4 rounded-xl bg-[#FBF6F1]/50 border border-gray-200"
                        >
                            <div className="font-bold text-[#00334F] mb-1">{feature.name}</div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#6E6E6E]">{feature.traditional}</span>
                                <div className="flex items-center gap-2 text-green-700 font-semibold">
                                    <CheckIcon className="w-4 h-4 text-green-500" />
                                    <span>{feature.mde}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};