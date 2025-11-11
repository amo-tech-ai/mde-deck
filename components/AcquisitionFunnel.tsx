import React from 'react';
import { motion } from 'framer-motion';

const stages = [
    { name: 'Traffic', percentage: '100%', color: '#00334F' },
    { name: 'Signups', percentage: '60%', color: '#2D6F8E' },
    { name: 'Active Decks', percentage: '30%', color: '#F3B93C' },
    { name: 'Paying Users', percentage: '15%', color: '#E97A41' },
    { name: 'Retained Members', percentage: '10%', color: '#00334F' },
];

export const AcquisitionFunnel: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full">
            {stages.map((stage, index) => (
                <React.Fragment key={stage.name}>
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <div
                            className="w-24 h-16 rounded-2xl flex flex-col items-center justify-center text-white"
                            style={{ backgroundColor: stage.color }}
                        >
                            <div className="font-bold text-lg">{stage.percentage}</div>
                        </div>
                        <div className="mt-2 text-xs font-semibold text-[#1E1E1E]">{stage.name}</div>
                    </motion.div>
                    {index < stages.length - 1 && (
                        <motion.div
                            className="flex-1 h-0.5 bg-gray-300 mx-2"
                             initial={{ scaleX: 0, opacity: 0 }}
                             whileInView={{ scaleX: 1, opacity: 1 }}
                             viewport={{ once: true }}
                             // FIX: `originX` should be in `style`, not `transition`. This caused the error "Type 'number' has no properties in common with type 'ValueTransition'".
                             style={{ originX: 0 }}
                             transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};