import React from 'react';
import { motion } from 'framer-motion';
import type { EventCardProps } from '../types';
import { CalendarIcon, LocationPinIcon } from './DecorativeElements';

export const EventCard: React.FC<EventCardProps> = ({ title, date, location, description, category, isFeatured }) => {
    const cardClasses = isFeatured
        ? 'bg-[#00334F] text-white'
        : 'bg-white/60 border border-gray-200 text-[#1E1E1E]';

    const textMuted = isFeatured ? 'text-white/70' : 'text-[#6E6E6E]';

    return (
        <motion.div
            className={`p-6 rounded-3xl h-full flex flex-col group ${cardClasses}`}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className={`py-1 px-3 rounded-full text-xs font-semibold ${isFeatured ? 'bg-white/10 text-white' : 'bg-[#00334F]/10 text-[#00334F]'}`}>{category}</span>
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="flex items-center gap-4 text-sm mt-2">
                    <div className="flex items-center gap-1.5">
                        <CalendarIcon className={`w-4 h-4 ${textMuted}`} />
                        <span className={textMuted}>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <LocationPinIcon className={`w-4 h-4 ${textMuted}`} />
                        <span className={textMuted}>{location}</span>
                    </div>
                </div>
                <p className={`mt-4 text-sm ${textMuted}`}>{description}</p>
            </div>
            <button className={`mt-6 w-full text-center font-bold py-2 rounded-full transition-colors duration-300 ${isFeatured ? 'bg-[#E97A41] text-white hover:bg-[#F3B93C]' : 'bg-[#00334F] text-white hover:bg-[#2D6F8E]'}`}>
                Learn More
            </button>
        </motion.div>
    );
};