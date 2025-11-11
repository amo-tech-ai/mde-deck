import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FlowerIcon, CircleIcon, IdeaIcon, CommunityIcon, RocketIcon } from '../components/DecorativeElements';

const MissionCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string }> = ({ title, description, icon, color }) => (
    <motion.div
        className="p-6 rounded-3xl text-white h-full"
        style={{ backgroundColor: color }}
        whileHover={{ y: -5 }}
    >
        <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-white/10">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-80 mt-2">{description}</p>
    </motion.div>
);

const FeatureCard: React.FC<{ title: string; description: string; isHighlighted?: boolean; }> = ({ title, description, isHighlighted }) => {
    const cardClasses = isHighlighted
        ? 'bg-[#00334F] text-white'
        : 'bg-white/60 border border-gray-200 text-[#1E1E1E]';
    return (
        <div className={`p-6 rounded-3xl text-center h-full ${cardClasses}`}>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className={`text-sm ${isHighlighted ? 'text-white/80' : 'text-[#6E6E6E]'}`}>{description}</p>
        </div>
    );
};

const StatCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-extrabold text-[#00334F]">{value}</div>
        <p className="text-sm text-[#6E6E6E] mt-1">{label}</p>
    </div>
);


const Introduction: React.FC = () => {
    const mainStyle = {
        background: 'linear-gradient(180deg, rgba(0, 51, 79, 0.03) 0%, rgba(251, 246, 241, 0) 30%), #FBF6F1',
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

    return (
        <main style={mainStyle} className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 text-[#1E1E1E] overflow-hidden">
            <motion.div
                className="w-full max-w-7xl bg-transparent relative p-4 lg:p-8 flex flex-col items-center justify-center space-y-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Elements */}
                <FlowerIcon className="absolute top-[5%] left-[10%] w-6 h-6 text-[#F3B93C] opacity-80" />
                <CircleIcon className="absolute top-[2%] right-[12%] w-3 h-3 text-[#E97A41]" />
                <FlowerIcon className="absolute bottom-[2%] right-[5%] w-8 h-8 text-[#00334F]" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#00334F] leading-tight">Building Medellín’s AI Future, Together.</h1>
                        <p className="mt-4 text-lg text-[#6E6E6E]">MDE.AI connects founders, investors, and innovators to collaborate, fund, and scale AI-driven startups.</p>
                        <div className="mt-8 flex items-center gap-4">
                            <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Explore the Platform</button>
                            <button className="border-2 border-[#00334F] text-[#00334F] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Join the Community</button>
                        </div>
                    </div>
                     <div className="h-80 rounded-3xl bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600880292210-85938a039796?q=80&w=1974&auto=format&fit=crop')"}}></div>
                </motion.section>

                {/* Mission Section */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div>
                        <h2 className="text-3xl font-bold text-[#00334F] mb-4">Our Mission</h2>
                        <p className="text-[#6E6E6E]">To provide the essential AI tools, resources, and network for Medellín’s founders to build world-class companies, fostering an ecosystem of innovation and sustainable growth.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <MissionCard title="Empower Founders" description="AI tools and mentorship for startup growth." icon={<IdeaIcon className="w-6 h-6 text-white"/>} color="#00334F" />
                        <MissionCard title="Enable Innovation" description="Collaboration across research and industry." icon={<RocketIcon className="w-6 h-6 text-white"/>} color="#E97A41" />
                        <MissionCard title="Unite the Community" description="Events, funding, and partnerships in one place." icon={<CommunityIcon className="w-6 h-6 text-white"/>} color="#F3B93C" />
                    </div>
                </motion.section>

                {/* What We Offer Section */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard title="Pitch Decks" description="Create investor-ready decks in minutes." />
                    <FeatureCard title="Jobs AI" description="Discover roles in top startups." isHighlighted />
                    <FeatureCard title="Perks & Events" description="Claim startup benefits and network locally." />
                </motion.section>
                
                {/* Community Impact */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/50 p-8 rounded-3xl">
                    <StatCard value="500+" label="Founders" />
                    <StatCard value="80+" label="Events" />
                    <StatCard value="50+" label="Partner Startups" />
                    <StatCard value="$1M+" label="in Perks Claimed" />
                </motion.section>
            </motion.div>
        </main>
    );
};

export default Introduction;