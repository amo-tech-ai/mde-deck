import React from 'react';
import { motion } from 'framer-motion';
import { ImportIcon, GearIcon, MoneyIcon, MapIcon, ExportIcon } from './DecorativeElements';

const steps = [
    { title: 'Import Pitch Deck', icon: <ImportIcon className="w-6 h-6" /> },
    { title: 'AI Analyzes & Structures', icon: <GearIcon className="w-6 h-6" /> },
    { title: 'Generate Forecasts', icon: <MoneyIcon className="w-6 h-6" /> },
    { title: 'Add Market Data', icon: <MapIcon className="w-6 h-6" /> },
    { title: 'Export & Share', icon: <ExportIcon className="w-6 h-6" /> },
];

export const BusinessPlanHowItWorksDiagram: React.FC = () => {
    return (
        <div className="w-full py-8">
            <h3 className="text-2xl font-bold text-[#00334F] mb-8 text-center">How the AI Business Plan Generator Works</h3>
            <div className="relative flex justify-between items-center">
                <svg className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1" preserveAspectRatio="none" viewBox="0 0 1000 2">
                    <motion.path
                        d="M 0 1 L 1000 1"
                        fill="none"
                        stroke="url(#bp-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="bp-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00334F" />
                            <stop offset="100%" stopColor="#F3B93C" />
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
                        <div className="w-16 h-16 bg-[#00334F] text-white rounded-full flex items-center justify-center border-4 border-[#FBF6F1]">
                            {step.icon}
                        </div>
                        <p className="mt-3 text-xs text-center font-semibold text-[#00334F] w-24">{step.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};