import React from 'react';
import { motion } from 'framer-motion';
import { IdeaIcon, BrainIcon, BarChartIcon, UserIcon, BriefcaseIcon, GradCapIcon } from './DecorativeElements';

const journey = [
    { title: 'Idea', icon: <IdeaIcon className="w-6 h-6" /> },
    { title: 'AI Pitch Generator', icon: <BrainIcon className="w-6 h-6" /> },
    { title: 'AI Business Plan', icon: <BarChartIcon className="w-6 h-6" /> },
    { title: 'Founder Profile', icon: <UserIcon className="w-6 h-6" /> },
    { title: 'Jobs & Perks', icon: <BriefcaseIcon className="w-6 h-6" /> },
    { title: 'Learning Hub', icon: <GradCapIcon className="w-6 h-6" /> },
];

export const FounderJourneyDiagram: React.FC = () => {
    return (
        <div className="w-full py-8">
            <div className="relative flex justify-between items-center">
                <svg className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1" preserveAspectRatio="none">
                    <motion.path
                        d="M 0 4 L 1200 4"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00334F" />
                            <stop offset="100%" stopColor="#E97A41" />
                        </linearGradient>
                    </defs>
                </svg>

                {journey.map((item, i) => (
                    <motion.div
                        key={item.title}
                        className="flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                    >
                        <div className="w-16 h-16 bg-[#FBF6F1] border-4 border-[#00334F] rounded-full flex items-center justify-center text-[#00334F]">
                            {item.icon}
                        </div>
                        <p className="mt-2 text-xs text-center font-semibold text-[#00334F] w-20">{item.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
