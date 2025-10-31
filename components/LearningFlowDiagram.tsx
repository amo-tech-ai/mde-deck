import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardIcon, PlayIcon, RocketIcon } from './DecorativeElements';

const steps = [
    { title: 'Register', icon: <ClipboardIcon className="w-8 h-8" /> },
    { title: 'Attend or Watch', icon: <PlayIcon className="w-8 h-8" /> },
    { title: 'Apply & Grow', icon: <RocketIcon className="w-8 h-8" /> },
];

export const LearningFlowDiagram: React.FC = () => {
    return (
        <div className="w-full py-8">
            <div className="relative flex justify-around items-center">
                 <svg className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5" preserveAspectRatio="none" viewBox="0 0 600 1">
                    <motion.path
                        d="M 0 0.5 L 600 0.5"
                        fill="none"
                        stroke="#00334F"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>

                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        className="flex flex-col items-center z-10 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div className="w-20 h-20 bg-[#00334F] text-white rounded-full flex items-center justify-center border-4 border-[#FBF6F1] shadow-md mb-4">
                            {step.icon}
                        </div>
                        <h4 className="font-bold text-[#00334F]">{step.title}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
