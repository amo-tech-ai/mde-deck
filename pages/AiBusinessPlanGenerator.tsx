import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FeatureHighlightCard } from '../components/FeatureHighlightCard';
import { BusinessPlanHowItWorksDiagram } from '../components/BusinessPlanHowItWorksDiagram';
import { DataVisualizationZone } from '../components/DataVisualizationZone';
import { AdvantageComparisonTable } from '../components/AdvantageComparisonTable';
import { ChartIcon, CompassIcon, WorldIcon, UsersIcon, FlowerIcon, CircleIcon } from '../components/DecorativeElements';

const AiBusinessPlanGenerator: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top right, rgba(243, 185, 60, 0.05), transparent 30%), radial-gradient(circle at bottom left, rgba(0, 51, 79, 0.05), transparent 40%), #FBF6F1'
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
        { title: 'AI Financial Forecasting', description: 'Auto-generate 3-year projections based on market data and your inputs.', icon: <ChartIcon />, color: 'deep-blue' as const },
        { title: 'Strategic Framework Builder', description: 'AI organizes your plan into executive summary, market analysis, and growth strategy.', icon: <CompassIcon />, color: 'off-white' as const },
        { title: 'Market & Trend Insights', description: 'Pulls real-time data from startup and AI industry sources.', icon: <WorldIcon />, color: 'off-white' as const },
        { title: 'Collaboration & Versioning', description: 'Refine with your team in real-time and export PDF/Notion-style reports.', icon: <UsersIcon />, color: 'mustard' as const },
    ];

    const comparisonData = [
        { name: 'Financial Models', traditional: 'Spreadsheet heavy', mde: 'Auto-generated' },
        { name: 'Market Research', traditional: 'Time-consuming', mde: 'Real-time AI data' },
        { name: 'Strategy Writing', traditional: 'Inconsistent', mde: 'Structured & guided' },
        { name: 'Export Quality', traditional: 'Plain PDF', mde: 'Polished, branded' },
        { name: 'Collaboration', traditional: 'Offline edits', mde: 'Live sync & versioning' },
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
                <FlowerIcon className="absolute top-[5%] left-[5%] w-6 h-6 text-[#E97A41] opacity-50" />
                <CircleIcon className="absolute bottom-[10%] right-[8%] w-3 h-3 text-[#00334F]" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Turn Your Idea Into a Data-Backed Business Plan.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        MDE.AI helps founders generate financial forecasts, growth strategies, and investor-ready business plans—automatically.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Generate My Business Plan</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Preview Example Plan</button>
                    </div>
                </motion.section>

                {/* Core Feature Cards */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(f => <FeatureHighlightCard key={f.title} {...f} />)}
                </motion.section>
                
                {/* How It Works Diagram */}
                <motion.section variants={itemVariants} className="w-full">
                    <BusinessPlanHowItWorksDiagram />
                </motion.section>

                {/* Data Visualization Zone */}
                <motion.section variants={itemVariants} className="w-full">
                    <DataVisualizationZone />
                </motion.section>
                
                {/* Comparative Advantage */}
                <motion.section variants={itemVariants} className="w-full">
                     <AdvantageComparisonTable 
                        title="Plan with Confidence"
                        description="Move beyond static templates. Our AI provides a dynamic, data-informed planning experience that evolves with your startup."
                        data={comparisonData}
                    />
                </motion.section>

                {/* CTA Bar */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Plan smarter. Impress faster.</h2>
                    <p className="mt-2 text-white/80">Generate your next investor-ready business plan with Medellín’s AI-powered toolkit.</p>
                    <button className="mt-6 bg-[#E97A41] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">Start Planning Now</button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default AiBusinessPlanGenerator;