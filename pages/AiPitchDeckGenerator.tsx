import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FeatureHighlightCard } from '../components/FeatureHighlightCard';
import { HowItWorksDiagram } from '../components/HowItWorksDiagram';
import { AdvantageComparisonTable } from '../components/AdvantageComparisonTable';
import { UiShowcase } from '../components/UiShowcase';
import { QuoteCard } from '../components/QuoteCard';
import { PartnerLogos } from '../components/PartnerLogos';
import { LightningIcon, PaletteIcon, PenIcon, PuzzleIcon, FlowerIcon, CircleIcon } from '../components/DecorativeElements';

const AiPitchDeckGenerator: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top left, rgba(233, 122, 65, 0.05), transparent 30%), radial-gradient(circle at bottom right, rgba(0, 51, 79, 0.05), transparent 40%), #FBF6F1'
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
    
    const features = [
        { title: 'Auto-Deck Creation', description: 'Generate a full, structured deck from one short brief or conversation.', icon: <LightningIcon />, color: 'deep-blue' as const },
        { title: 'AI Design & Layout', description: 'Automatically applies best design practices, colors, and typography.', icon: <PaletteIcon />, color: 'off-white' as const },
        { title: 'Smart Content Writing', description: 'AI refines your narrative using proven investor language and tone.', icon: <PenIcon />, color: 'off-white' as const },
        { title: 'Customization & Branding', description: 'Edit, restyle, and export decks that match your visual identity.', icon: <PuzzleIcon />, color: 'mustard' as const },
    ];

    const comparisonData = [
        { name: 'Creation Time', traditional: '10+ hours', mde: '<1 hour' },
        { name: 'Design Quality', traditional: 'Inconsistent', mde: 'Consistent & Branded' },
        { name: 'Storytelling', traditional: 'Founder-written', mde: 'AI-optimized' },
        { name: 'Collaboration', traditional: 'Limited', mde: 'Real-time & Shareable' },
        { name: 'Analytics', traditional: 'None', mde: 'Built-in Viewer Tracking' },
    ];
    
    const quote = { text: "This AI deck generator cut our prep time by 90%. We raised in two weeks.", author: "Beta Founder, Ruta N Program" };

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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Generate Your Investor-Ready Pitch Deck in Minutes—Not Days.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        Let AI design, write, and structure your slides—so you can focus on your story, not your formatting.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Try the AI Deck Wizard</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Watch Demo</button>
                    </div>
                </motion.section>

                {/* Core Feature Cards */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(f => <FeatureHighlightCard key={f.title} {...f} />)}
                </motion.section>
                
                {/* How It Works Diagram */}
                <motion.section variants={itemVariants} className="w-full">
                    <HowItWorksDiagram />
                </motion.section>

                {/* Comparative Advantage */}
                <motion.section variants={itemVariants} className="w-full">
                    <AdvantageComparisonTable 
                        title="A 10x Better Experience"
                        description="MDE.AI's generator streamlines every step of the creation process, saving founders time and delivering a superior, investor-ready result."
                        data={comparisonData}
                    />
                </motion.section>

                {/* UI Showcase */}
                <motion.section variants={itemVariants} className="w-full">
                    <UiShowcase />
                </motion.section>

                {/* Social Proof */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <QuoteCard {...quote} />
                    </div>
                     <div className="md:col-span-2">
                        <PartnerLogos />
                    </div>
                </motion.section>

                {/* CTA Bar */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Start Building Your Deck Smarter.</h2>
                    <p className="mt-2 text-white/80">Join hundreds of founders creating investor-ready decks with AI.</p>
                    <button className="mt-6 bg-[#E97A41] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">Generate My First Deck</button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default AiPitchDeckGenerator;