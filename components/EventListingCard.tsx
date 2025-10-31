import React from 'react';
import { motion } from 'framer-motion';

// Mock data, replace with props
const EventListingCard: React.FC = () => {
    return (
        <motion.div
            className="bg-white/60 border border-gray-200 rounded-3xl overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.05)"}}
        >
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-40 object-cover" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold py-1 px-3 rounded-full bg-[#00334F]/10 text-[#00334F]">Live Workshop</span>
                    <span className="text-xs font-semibold text-[#6E6E6E]">Virtual</span>
                </div>
                <h3 className="font-bold text-lg text-[#1E1E1E]">AI for Startups: From Idea to Product</h3>
                <p className="text-sm text-[#6E6E6E] mt-1">Dec 12, 2025 · 10:00 AM GMT-5</p>
                <div className="flex -space-x-2 mt-4">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" />
                </div>
                <div className="flex gap-2 mt-6">
                    <button className="flex-1 bg-[#E97A41] text-white font-bold py-2 rounded-full">Register Now</button>
                    <button className="flex-1 border-2 border-gray-300 text-gray-600 font-bold py-2 rounded-full">Add to Calendar</button>
                </div>
            </div>
        </motion.div>
    );
};

export default EventListingCard;
