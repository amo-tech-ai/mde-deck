import React from 'react';
import { motion } from 'framer-motion';
import { StatHighlightCard } from '../components/StatHighlightCard';
import { EcosystemBarChart } from '../components/EcosystemBarChart';
import { InitiativeCard } from '../components/InitiativeCard';
import { ColombiaMap } from '../components/ColombiaMap';
import { FlowerIcon, CircleIcon, TrophyIcon, GrowthIcon, ArrowUpIcon, CheckIcon, GradCapIcon, CityIcon, ShieldIcon } from '../components/DecorativeElements';

const MarketOpportunity: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at 15% 85%, rgba(0, 51, 79, 0.05), transparent 30%), radial-gradient(circle at 85% 15%, rgba(243, 185, 60, 0.05), transparent 40%), #FBF6F1'
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const stats = [
        { value: "443", label: "Total Startups", source: "Source: StartupBlink 2025", icon: <ArrowUpIcon className="w-6 h-6 text-white"/>, color: "#00334F" },
        { value: "+41.6%", label: "Annual Growth", source: "Source: StartupBlink 2025", icon: <GrowthIcon className="w-6 h-6 text-[#1E1E1E]"/>, color: "#F3B93C" },
        { value: "#2", label: "in Colombia", source: "Source: StartupBlink 2025", icon: <TrophyIcon className="w-6 h-6 text-white"/>, color: "#E97A41" }
    ];
    
    const initiatives = [
        { title: "Talent Development", description: "Ruta N & EAFIT launch AI specialization programs.", icon: <GradCapIcon />, bgColor: "bg-[#00334F]" },
        { title: "Smart City Projects", description: "AI systems target 20% carbon reduction & 10% less congestion.", icon: <CityIcon />, bgColor: "bg-[#F3B93C]/80" },
        { title: "Public Innovation", description: "SIRMED: AI-powered disaster management tool saving 15B COP annually.", icon: <ShieldIcon />, bgColor: "bg-white/60" }
    ];

    return (
        <main style={mainStyle} className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 text-[#1E1E1E] overflow-hidden">
            <motion.div
                className="w-full max-w-7xl bg-transparent relative p-4 lg:p-8 flex flex-col items-center justify-center space-y-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Elements */}
                <CircleIcon className="absolute top-[5%] left-[10%] w-3 h-3 text-[#E97A41]" />
                <FlowerIcon className="absolute bottom-[2%] right-[5%] w-8 h-8 text-[#00334F] opacity-70" />

                {/* Hero Header */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F] leading-tight">Medellín’s AI Ecosystem: A Rising Hub for Innovation.</h1>
                        <p className="mt-4 text-lg text-[#6E6E6E]">With 443 startups and +41.6% annual growth, Medellín stands as Colombia’s #2 startup ecosystem—now accelerating its AI sector.</p>
                    </div>
                    <div className="h-48 md:h-64">
                        <ColombiaMap />
                    </div>
                </motion.section>

                {/* Data Highlights */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map(s => <StatHighlightCard key={s.label} {...s} />)}
                </motion.section>

                {/* Ecosystem Overview */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-3">
                        <h2 className="text-2xl font-bold text-[#00334F] mb-4">AI-Driven Momentum in Medellín’s Startup Scene</h2>
                        <p className="text-[#6E6E6E] mb-4">AI is now the 5th most popular industry in Medellín. With strong support from Ruta N and global partners, the city’s ecosystem continues to mature.</p>
                        <ul className="space-y-2">
                           <li className="flex items-center text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-2"/>379 tech companies attracted (11,000 jobs created).</li>
                           <li className="flex items-center text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-2"/>+17-spot global ranking jump since 2024.</li>
                           <li className="flex items-center text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-2"/>13 AI startups recognized in 2025.</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                         <EcosystemBarChart />
                    </div>
                </motion.section>
                
                {/* Initiatives */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {initiatives.map(i => <InitiativeCard key={i.title} {...i} />)}
                </motion.section>
                
                {/* Callout Summary */}
                <motion.section variants={itemVariants} className="w-full bg-[#00334F] text-white p-4 rounded-3xl flex justify-around items-center text-center font-semibold">
                    <span>443 Startups</span>
                    <span className="opacity-50">|</span>
                    <span>+41.6% Growth</span>
                    <span className="opacity-50">|</span>
                    <span>#2 in Colombia</span>
                     <span className="opacity-50">|</span>
                    <span>#145 Global Ranking</span>
                </motion.section>

            </motion.div>
        </main>
    );
};

export default MarketOpportunity;
