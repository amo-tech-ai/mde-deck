import React from 'react';
import { motion } from 'framer-motion';
import { PaletteIcon, PenIcon, RocketIcon } from './DecorativeElements';

const slides = [
    { title: 'Title Slide', color: 'bg-blue-100' },
    { title: 'Problem', color: 'bg-orange-100' },
    { title: 'Solution', color: 'bg-yellow-100' },
    { title: 'Traction', color: 'bg-green-100' },
];

export const UiShowcase: React.FC = () => {
    return (
        <div className="w-full bg-[#00334F]/5 p-8 rounded-3xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-80">
                    {slides.map((slide, i) => (
                        <motion.div
                            key={slide.title}
                            className={`absolute w-3/5 h-3/5 rounded-xl shadow-lg border-2 border-white ${slide.color} flex items-center justify-center font-bold text-gray-600`}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 + i * 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -15 + i * 10 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: i * 0.1,
                            }}
                            style={{
                                top: `${10 + i * 5}%`,
                                left: `${10 + i * 10}%`,
                                zIndex: i,
                            }}
                        >
                            {slide.title}
                        </motion.div>
                    ))}
                </div>
                <div className="text-right">
                    <h3 className="text-2xl font-bold text-[#00334F]">From Concept to Completion</h3>
                    <p className="text-lg font-bold text-[#E97A41]">in under 10 minutes.</p>
                    <p className="mt-4 text-[#6E6E6E]">
                        Our AI handles the heavy lifting, applying best practices for design, layout, and narrative flow, leaving you with a polished, professional deck.
                    </p>
                    <div className="flex justify-end gap-4 mt-6">
                        <PaletteIcon className="w-8 h-8 text-[#00334F]/50" />
                        <PenIcon className="w-8 h-8 text-[#00334F]/50" />
                        <RocketIcon className="w-8 h-8 text-[#00334F]/50" />
                    </div>
                </div>
            </div>
        </div>
    );
};