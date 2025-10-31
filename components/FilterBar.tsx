import React from 'react';
import { motion } from 'framer-motion';

const FilterBar: React.FC = () => {
    return (
        <motion.div
            className="sticky top-0 z-10 bg-[#FBF6F1]/80 backdrop-blur-sm py-4 mb-8"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <select className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm">
                        <option>Workshop</option>
                        <option>Seminar</option>
                        <option>Panel</option>
                    </select>
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 text-sm">
                        <button className="px-3 py-1 rounded-full bg-[#00334F] text-white">Live</button>
                        <button className="px-3 py-1 rounded-full">Virtual</button>
                    </div>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Search events..." className="bg-white border border-gray-200 rounded-full px-4 py-2 pl-10 text-sm w-64" />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
            </div>
        </motion.div>
    );
};

export default FilterBar;
