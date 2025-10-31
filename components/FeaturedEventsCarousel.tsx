import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const FeaturedEventSlide: React.FC = () => (
    <div className="w-full h-80 bg-[#00334F] rounded-3xl flex-shrink-0 relative overflow-hidden p-12 text-white">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10">
            <span className="py-1 px-3 text-sm font-bold bg-red-500 rounded-full animate-pulse">LIVE NOW</span>
            <h2 className="text-4xl font-extrabold mt-4">AI for Smart Cities – Medellín’s Next Frontier</h2>
            <p className="mt-2 text-white/80">"Join us to explore how AI is reshaping urban innovation." - Ruta N</p>
            <button className="mt-6 bg-[#E97A41] font-bold py-3 px-6 rounded-full">Save My Seat</button>
        </div>
    </div>
);

const FeaturedEventsCarousel: React.FC = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="w-full">
            <motion.div className="w-full overflow-hidden cursor-grab" ref={constraintsRef}>
                <motion.div className="flex gap-6 p-2" drag="x" dragConstraints={constraintsRef}>
                    <FeaturedEventSlide />
                    <FeaturedEventSlide />
                    <FeaturedEventSlide />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FeaturedEventsCarousel;
