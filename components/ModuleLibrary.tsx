import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ModuleProps } from '../types';
import { PlayIcon } from './DecorativeElements';

const allModules: ModuleProps[] = [
    { thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697302047?q=80&w=2070&auto=format&fit=crop', title: 'AI Business Models for Founders', duration: '45 minutes', level: 'Founders Track' },
    { thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4622ee877?q=80&w=1965&auto=format&fit=crop', title: 'Intro to Generative AI', duration: '60 minutes', level: 'Beginner' },
    { thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', title: 'Advanced Prompt Engineering', duration: '90 minutes', level: 'Advanced' },
    { thumbnail: 'https://images.unsplash.com/photo-1507146153580-69a17e6b832a?q=80&w=2070&auto=format&fit=crop', title: 'Deploying LLMs with Supabase', duration: '75 minutes', level: 'Intermediate' },
];

const filters: ModuleProps['level'][] = ['Founders Track', 'Beginner', 'Intermediate', 'Advanced'];

const ModuleCard: React.FC<ModuleProps> = ({ thumbnail, title, duration, level }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="rounded-3xl overflow-hidden group relative border border-gray-200"
    >
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
            <span className="text-xs font-bold py-1 px-2 rounded-full bg-[#F3B93C] text-[#1E1E1E]">{level}</span>
            <h4 className="font-bold mt-2">{title}</h4>
            <p className="text-xs text-white/80">{duration}</p>
        </div>
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayIcon className="w-5 h-5"/>
        </button>
    </motion.div>
);


export const ModuleLibrary: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ModuleProps['level'] | 'All'>('All');
    
    const filteredModules = activeFilter === 'All' 
        ? allModules
        : allModules.filter(m => m.level === activeFilter);

    return (
        <div className="w-full">
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                <button
                    onClick={() => setActiveFilter('All')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                        activeFilter === 'All'
                            ? 'bg-[#00334F] text-white'
                            : 'bg-white/50 text-[#6E6E6E] hover:bg-[#00334F]/10'
                    }`}
                >
                    All
                </button>
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                            activeFilter === filter
                                ? 'bg-[#00334F] text-white'
                                : 'bg-white/50 text-[#6E6E6E] hover:bg-[#00334F]/10'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {filteredModules.map(module => <ModuleCard key={module.title} {...module} />)}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
