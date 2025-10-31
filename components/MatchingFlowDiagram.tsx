import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, SetPreferencesIcon, AiMatchIcon, CommunityIcon } from './DecorativeElements';

const steps = [
    { title: 'Sign Up', icon: <UserIcon className="w-8 h-8" /> },
    { title: 'Set Preferences', icon: <SetPreferencesIcon className="w-8 h-8" /> },
    { title: 'AI Matches', icon: <AiMatchIcon className="w-8 h-8" /> },
    { title: 'Connect & Grow', icon: <CommunityIcon className="w-8 h-8" /> },
];

export const MatchingFlowDiagram: React.FC = () => {
    return (
        <div className="w-full py-8">
             <h2 className="text-3xl font-bold text-[#00334F] text-center mb-10">Smarter Matches, Faster Hires.</h2>
            <div className="relative flex justify-between items-center">
                <svg className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5" preserveAspectRatio="none" viewBox="0 0 800 2">
                    <motion.path
                        d="M 0 1 L 800 1"
                        fill="none"
                        stroke="url(#match-gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="match-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00334F" />
                            <stop offset="100%" stopColor="#E97A41" />
                        </linearGradient>
                    </defs>
                </svg>

                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                    >
                        <div className="w-20 h-20 bg-[#FBF6F1] text-[#00334F] rounded-full flex items-center justify-center border-4 border-[#00334F] shadow-lg">
                            {step.icon}
                        </div>
                        <p className="mt-4 text-sm text-center font-semibold text-[#00334F] w-28">{step.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
