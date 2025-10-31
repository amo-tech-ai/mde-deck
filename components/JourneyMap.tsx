import React from 'react';
import { motion } from 'framer-motion';
import type { JourneyStepProps } from '../types';

interface JourneyMapProps {
    steps: JourneyStepProps[];
}

export const JourneyMap: React.FC<JourneyMapProps> = ({ steps }) => {
    return (
        <div className="relative w-full">
            <div className="absolute top-10 left-0 right-0 h-10 flex items-center">
                 <svg width="100%" height="100%" viewBox="0 0 1200 40" preserveAspectRatio="none">
                    <motion.path
                        d="M 50 20 C 250 20, 250 20, 300 20 C 350 20, 350 20, 550 20 C 650 20, 750 20, 850 20 C 950 20, 1050 20, 1150 20"
                        fill="none"
                        stroke="#00334F"
                        strokeWidth="2"
                        strokeDasharray="1 4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>
            <div className="flex justify-between items-start w-full relative">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.step}
                        className="flex flex-col items-center text-center w-1/5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
                    >
                        <motion.div 
                            className="w-20 h-20 rounded-full flex items-center justify-center text-white font-extrabold text-2xl mb-4"
                            style={{
                                background: 'linear-gradient(135deg, #00334F, #2D6F8E)',
                                border: '4px solid #FBF6F1',
                                boxShadow: '0 0 0 4px #00334F'
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {step.step}
                        </motion.div>
                        <div className="bg-[#FBF6F1] p-4 rounded-2xl relative">
                             <div className="text-[#00334F] mb-2">{React.cloneElement(step.icon as React.ReactElement, { className: 'w-8 h-8 mx-auto' })}</div>
                             <h3 className="font-bold text-lg text-[#00334F]">{step.title}</h3>
                             <p className="text-sm text-[#6E6E6E] mt-1">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};