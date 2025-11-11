import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { ValuePropCard } from '../components/ValuePropCard';
import { ComparisonTable } from '../components/ComparisonTable';
import { FounderJourneyDiagram } from '../components/FounderJourneyDiagram';
import { QuoteCard } from '../components/QuoteCard';
import { PartnerLogos } from '../components/PartnerLogos';
import { IdeaIcon, BarChartIcon, UserGridIcon, GradCapIcon, FlowerIcon, CircleIcon, PresentationIcon } from '../components/DecorativeElements';

const ValueProposition: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top left, rgba(0, 51, 79, 0.1), transparent 30%), radial-gradient(circle at bottom right, rgba(243, 185, 60, 0.1), transparent 30%), #FBF6F1'
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

    const valueProps = [
        { title: 'AI Pitch Generator', description: 'Create investor-ready pitch decks in minutes through conversational AI.', icon: <PresentationIcon />, color: 'deep-blue' as const },
        { title: 'AI Business Plan Builder', description: 'Instantly produce structured, data-driven business plans and revenue models.', icon: <BarChartIcon />, color: 'off-white' as const },
        { title: 'Jobs & Founder Network', description: 'Access AI-curated startup job boards and founder profiles to collaborate.', icon: <UserGridIcon />, color: 'off-white' as const },
        { title: 'Virtual Learning Hub', description: 'Attend AI-powered training and expert talks from accelerators.', icon: <GradCapIcon />, color: 'mustard' as const },
    ];
    
    const quotes = [
        { text: "MDE.AI is redefining how founders build — faster, smarter, and globally connected.", author: "Ruta N Innovation Lead" },
        { text: "Finally, an AI platform that merges creativity with community.", author: "Startup Founder, Medellín AI Network" }
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
                <FlowerIcon className="absolute top-[2%] left-[5%] w-8 h-8 text-[#00334F] opacity-50" />
                <CircleIcon className="absolute top-[10%] right-[8%] w-4 h-4 text-[#F3B93C]" />
                <FlowerIcon className="absolute bottom-[15%] left-[2%] w-6 h-6 text-[#E97A41] opacity-70" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Why MDE.AI Is 10× Smarter for Startup Founders.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        An all-in-one AI platform that helps founders ideate, plan, connect, and grow—from investor-ready decks to real opportunities.
                    </p>
                </motion.section>

                {/* Core Value Prop Cards */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueProps.map(vp => <ValuePropCard key={vp.title} {...vp} />)}
                </motion.section>

                {/* Comparison Section */}
                <motion.section variants={itemVariants} className="w-full">
                    <ComparisonTable />
                </motion.section>

                {/* Founder Journey */}
                <motion.section variants={itemVariants} className="w-full">
                    <FounderJourneyDiagram />
                </motion.section>

                {/* Testimonials */}
                 <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {quotes.map(q => <QuoteCard key={q.author} {...q} />)}
                </motion.section>

                {/* Partner Logos */}
                <motion.section variants={itemVariants} className="w-full">
                    <PartnerLogos />
                </motion.section>

                {/* Closing Statement */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-6 rounded-3xl text-center relative overflow-hidden">
                    <h2 className="text-2xl font-bold">From pitch to partnership—MDE.AI empowers founders to grow smarter, not harder.</h2>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-[#E97A41] rounded-full" />
                </motion.div>
            </motion.div>
        </main>
    );
};

export default ValueProposition;