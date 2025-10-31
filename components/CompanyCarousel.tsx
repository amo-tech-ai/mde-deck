import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { CompanyCarouselCardProps } from '../types';
import { FlagUS, FlagDE, FlagCO, FlagJP } from './DecorativeElements';

const companies = [
  { name: 'Cogniflow AI', description: 'No-code AI platform.', flag: <FlagCO className="w-5 h-5 rounded-sm"/>, logo: '🤖' },
  { name: 'LinkedAI', description: 'Data labeling for computer vision.', flag: <FlagCO className="w-5 h-5 rounded-sm"/>, logo: '🔗' },
  { name: 'Tesoro AI', description: 'AI-powered talent acquisition.', flag: <FlagUS className="w-5 h-5 rounded-sm"/>, logo: '💎' },
  { name: 'QuantumBrain', description: 'Next-gen neuromorphic computing.', flag: <FlagDE className="w-5 h-5 rounded-sm"/>, logo: '🧠' },
  { name: 'Sakura Robotics', description: 'Humanoid assistants for logistics.', flag: <FlagJP className="w-5 h-5 rounded-sm"/>, logo: '🌸' },
];

const CompanyCard: React.FC<CompanyCarouselCardProps> = ({ logo, name, description, flag }) => (
    <div className="w-64 h-40 bg-white/60 border border-gray-200 rounded-2xl p-4 flex flex-col justify-between flex-shrink-0 cursor-grab">
        <div>
            <div className="flex items-center gap-3">
                <div className="text-2xl">{logo}</div>
                <h4 className="font-bold text-[#00334F]">{name}</h4>
            </div>
            <p className="text-sm text-[#6E6E6E] mt-2">{description}</p>
        </div>
        <div className="flex justify-end">{flag}</div>
    </div>
);

export const CompanyCarousel: React.FC = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="w-full flex flex-col items-center">
             <h3 className="text-2xl font-bold text-[#00334F] mb-6">Meet the Innovators Shaping AI’s Future</h3>
            <motion.div className="w-full overflow-hidden" ref={constraintsRef}>
                <motion.div
                    className="flex gap-6 p-2"
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                >
                    {[...companies, ...companies].map((company, i) => (
                        <CompanyCard key={`${company.name}-${i}`} {...company} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};