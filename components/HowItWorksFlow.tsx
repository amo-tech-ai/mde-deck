import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, BrowseIcon, ClaimIcon } from './DecorativeElements';

const steps = [
    { title: 'Sign Up', description: 'Join the MDE.AI community in seconds.', icon: <UserIcon className="w-8 h-8" /> },
    { title: 'Browse Perks', description: 'Filter and pick your favorite tools.', icon: <BrowseIcon className="w-8 h-8" /> },
    { title: 'Claim & Build', description: 'Redeem instantly and start scaling.', icon: <ClaimIcon className="w-8 h-8" /> },
];

export const HowItWorksFlow: React.FC = () => {
    return (
        <div className="w-full py-8">
            <div className="relative flex justify-around items-start">
                {steps.map((step, i) => (
                    <React.Fragment key={step.title}>
                        <motion.div
                            className="flex flex-col items-center text-center w-48"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-[#00334F]/10 flex items-center justify-center text-[#00334F] mb-4">
                                {step.icon}
                            </div>
                            <h4 className="font-bold text-[#00334F]">{step.title}</h4>
                            <p className="text-sm text-[#6E6E6E] mt-1">{step.description}</p>
                        </motion.div>
                        {i < steps.length - 1 && (
                             <div className="h-px w-full bg-gray-300 absolute top-10" style={{left: '33%', right: '33%', zIndex: -1}}/>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};