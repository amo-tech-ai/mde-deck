import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FlowerIcon, CircleIcon, SCurveIcon, RutaNLogo, EAFITLogo, C4IRLogo } from '../components/DecorativeElements';
import { TractionMetricCard } from '../components/TractionMetricCard';
import { GrowthProjectionChart } from '../components/GrowthProjectionChart';
import { Timeline } from '../components/Timeline';
import { QuoteCard } from '../components/QuoteCard';
import { PartnerLogos } from '../components/PartnerLogos';

const Traction: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at 10% 10%, rgba(243, 185, 60, 0.05), transparent 30%), radial-gradient(circle at 90% 90%, rgba(0, 51, 79, 0.05), transparent 40%), #FBF6F1'
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

    const metrics = [
        { value: '1,000+', label: 'Pre-Launch Waitlist', context: 'Driven by early interest from Medellín AI founders & Ruta N community.', color: 'off-white' as const },
        { value: '5', label: 'Institutional Backers', context: '', color: 'deep-blue' as const, children: <div className="flex items-center gap-4 grayscale brightness-200 invert"><RutaNLogo/><EAFITLogo/><C4IRLogo/></div> },
        { value: '443', label: 'Startups in Medellín', context: 'Positioned in one of LATAM’s fastest-growing AI hubs.', color: 'mustard' as const },
        { value: '10+', label: 'Community Reach Events', context: 'Community engagement through Medellín AI network.', color: 'off-white' as const },
    ];
    
    const timelineItems = [
        { quarter: "Q3 2024", event: "MVP Development Kickoff" },
        { quarter: "Q1 2025", event: "AI Pitch Deck Wizard Ready" },
        { quarter: "Q2 2025", event: "Beta Partnership with Ruta N" },
        { quarter: "Q4 2025", event: "Public Launch & Community Expansion" }
    ];

    const quotes = [
        { text: "This platform could redefine how Medellín founders prepare for investors.", author: "Ruta N Innovation Director" },
        { text: "MDE.AI bridges the gap between tech and opportunity.", author: "EAFIT AI Lab" }
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
                <FlowerIcon className="absolute top-[1%] left-[15%] w-6 h-6 text-[#00334F] opacity-50" />
                <CircleIcon className="absolute bottom-[20%] right-[5%] w-5 h-5 text-[#E97A41]" />

                {/* Header */}
                <motion.section variants={itemVariants} className="w-full flex justify-between items-center">
                    <div className="w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F] leading-tight">Early Momentum: Building Traction in Medellín’s AI Ecosystem</h1>
                        <div className="w-1/3 h-1.5 bg-[#E97A41] mt-4 rounded-full" />
                        <p className="mt-4 text-lg text-[#6E6E6E]">Although pre-launch, MDE.AI is backed by a growing founder network, strong institutional support, and measurable early indicators of market fit.</p>
                    </div>
                    <div className="w-1/3">
                        <SCurveIcon className="text-[#00334F]/30" />
                    </div>
                </motion.section>

                {/* Key Metrics */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map(m => <TractionMetricCard key={m.label} {...m} />)}
                </motion.section>

                {/* Growth Over Time */}
                <motion.section variants={itemVariants} className="w-full">
                    <GrowthProjectionChart />
                     <p className="text-center text-sm text-[#6E6E6E] mt-2">Projected adoption based on ecosystem growth rates (+41.6% YoY) and pre-launch demand indicators.</p>
                </motion.section>

                {/* Milestones & Proof */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold text-[#00334F] mb-6">Milestones & Roadmap</h3>
                        <Timeline items={timelineItems} />
                    </div>
                    <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-[#00334F] mb-6">Qualitative Proof</h3>
                         {quotes.map(q => <QuoteCard key={q.author} {...q} />)}
                    </div>
                </motion.section>

                {/* Partner Logos */}
                <motion.section variants={itemVariants} className="w-full pt-8">
                    <PartnerLogos />
                </motion.section>

                 {/* Closing Statement */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-6 rounded-3xl text-center">
                    <h2 className="text-2xl font-bold">From local innovation to global acceleration—MDE.AI is poised to scale with Medellín’s AI revolution.</h2>
                     <button className="mt-4 bg-[#E97A41] text-white font-bold py-2 px-6 rounded-full transition-transform hover:scale-105">Join the Launch Waitlist</button>
                </motion.div>

            </motion.div>
        </main>
    );
};

export default Traction;