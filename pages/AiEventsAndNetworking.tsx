import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { EventCard } from '../components/EventCard';
import { InteractiveWorldMap } from '../components/InteractiveWorldMap';
import { CategoryButtons } from '../components/CategoryButtons';
import { CompanyCarousel } from '../components/CompanyCarousel';
import { FlowerIcon, CircleIcon } from '../components/DecorativeElements';


const AiEventsAndNetworking: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top right, rgba(0, 51, 79, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(233, 122, 65, 0.05), transparent 40%), #FBF6F1'
    };

    // FIX: Added Variants type to ensure correct type checking for framer-motion props.
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    // FIX: Added Variants type to ensure correct type checking for framer-motion props.
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const featuredEvents = [
        { title: 'AI Agent Founders Meetup', date: 'Feb 2025', location: 'San Francisco, USA', description: 'Founder-only networking for AI startups.', category: 'Networking' },
        { title: 'Innovation Week Prague', date: 'Oct 2025', location: 'Prague, Czech Republic', description: 'AI and startup summit focused on emerging ecosystems.', category: 'Summit', isFeatured: true },
        { title: 'Startup Revolution AI', date: 'Sep 2025', location: 'Skopje, Macedonia', description: 'Hands-on sessions and pitch challenges for founders.', category: 'Startup Pitch' },
        { title: 'AI & Big Data Expo', date: 'Jun 2025', location: 'Santa Clara, CA', description: 'Business + applied AI event for global startups.', category: 'Expo' },
    ];

    return (
        <main style={mainStyle} className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 text-[#1E1E1E] overflow-hidden">
            <motion.div
                className="w-full max-w-7xl bg-transparent relative p-4 lg:p-8 flex flex-col items-center justify-center space-y-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Elements */}
                <FlowerIcon className="absolute top-[2%] left-[5%] w-8 h-8 text-[#00334F] opacity-50" />
                <CircleIcon className="absolute top-[10%] right-[8%] w-4 h-4 text-[#F3B93C]" />
                
                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Join the Global AI Innovation Network.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        Explore curated events, startup meetups, and founder-led sessions that bring the AI world closer to Medellín.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">View Upcoming Events</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Host an AI Meetup</button>
                    </div>
                </motion.section>

                {/* Featured Events Grid */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredEvents.map(e => <EventCard key={e.title} {...e} />)}
                </motion.section>
                
                {/* Interactive Map */}
                <motion.section variants={itemVariants} className="w-full">
                    <InteractiveWorldMap />
                </motion.section>
                
                {/* Categories Section */}
                <motion.section variants={itemVariants} className="w-full">
                    <CategoryButtons />
                </motion.section>

                {/* Company Presentations Carousel */}
                <motion.section variants={itemVariants} className="w-full">
                    <CompanyCarousel />
                </motion.section>

                {/* CTA Bar */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Host, speak, or connect—bring your AI event to Medellín.</h2>
                    <p className="mt-2 text-white/80 max-w-2xl mx-auto">Collaborate with MDE.AI to grow your audience and strengthen global innovation ties.</p>
                    <button className="mt-6 bg-[#E97A41] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">Partner With Us</button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default AiEventsAndNetworking;