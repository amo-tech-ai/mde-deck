import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FlowerIcon, CircleIcon, IdeaIcon, BrainIcon, ChartIcon, NetworkIcon, RocketIcon, UserIcon, ChatIcon, BriefcaseIcon, AiIcon, CommunityIcon } from '../components/DecorativeElements';
import { JourneyMap } from '../components/JourneyMap';
import { AiWorkflowDiagram } from '../components/AiWorkflowDiagram';
import { StorytellingCard } from '../components/StorytellingCard';

const HowItWorks: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top right, rgba(0, 51, 79, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(233, 122, 65, 0.05), transparent 40%), #FBF6F1'
    };

    // FIX: Added Variants type to ensure correct type checking for framer-motion props.
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5 } }
    };

    // FIX: Added Variants type to ensure correct type checking for framer-motion props.
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };
    
    const journeySteps = [
        { step: 1, title: 'Sign Up & Personalize', description: 'Create your founder profile and define your startup focus.', icon: <UserIcon className="w-8 h-8"/> },
        { step: 2, title: 'Chat With AI Pitch Wizard', description: 'Describe your idea—AI crafts your 10-slide investor-ready deck.', icon: <ChatIcon className="w-8 h-8"/> },
        { step: 3, title: 'Generate Business Plan', description: 'Turn your concept into a strategy with forecasts and goals.', icon: <ChartIcon className="w-8 h-8"/> },
        { step: 4, title: 'Join the Ecosystem', description: 'Connect with founders, events, and the Medellín AI network.', icon: <NetworkIcon className="w-8 h-8"/> },
        { step: 5, title: 'Access Jobs & Perks', description: 'Apply for startup jobs and unlock founder benefits.', icon: <BriefcaseIcon className="w-8 h-8"/> }
    ];

    const storytellingCards = [
        { title: 'Founder First', description: 'Personalized onboarding for early-stage creators.', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', icon: <IdeaIcon className="w-8 h-8 text-[#F3B93C]" /> },
        { title: 'AI in Action', description: 'Live preview of your deck, updated as you chat.', imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop', icon: <AiIcon className="w-8 h-8 text-[#F3B93C]" /> },
        { title: 'Community Connection', description: 'Meet other innovators, investors, and mentors in Medellín.', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', icon: <CommunityIcon className="w-8 h-8 text-[#F3B93C]" /> }
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
                <FlowerIcon className="absolute top-[5%] left-[10%] w-6 h-6 text-[#F3B93C] opacity-60" />
                <CircleIcon className="absolute top-[2%] right-[12%] w-3 h-3 text-[#E97A41]" />
                <FlowerIcon className="absolute bottom-[2%] right-[5%] w-8 h-8 text-[#00334F]" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <div className="relative inline-block mb-4">
                        <div className="flex items-center gap-4 text-[#00334F]/50">
                            <IdeaIcon className="w-6 h-6" />
                            <BrainIcon className="w-6 h-6" />
                            <ChartIcon className="w-6 h-6" />
                            <NetworkIcon className="w-6 h-6" />
                            <RocketIcon className="w-6 h-6" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#00334F]">
                        How MDE.AI Works
                    </h1>
                     <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#00334F] opacity-80">From Idea to Investor-Ready in Minutes.</h2>
                    <p className="mt-6 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        A seamless AI-powered journey designed for startup founders—guiding every step from your first pitch to your next opportunity.
                    </p>
                </motion.section>

                {/* Step-by-Step Flow */}
                <motion.section variants={itemVariants} className="w-full">
                    <JourneyMap steps={journeySteps} />
                </motion.section>

                {/* AI Workflow Snapshot */}
                <motion.section variants={itemVariants} className="w-full flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-[#00334F] text-center mb-4">The Intelligence Behind MDE.AI</h2>
                    <AiWorkflowDiagram />
                     <p className="mt-8 text-center text-[#6E6E6E] max-w-2xl mx-auto">
                        Each interaction feeds real data into your personalized founder workspace—evolving as your startup grows.
                    </p>
                </motion.section>

                {/* Visual Storytelling Cards */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    {storytellingCards.map(card => (
                        <StorytellingCard key={card.title} {...card} />
                    ))}
                </motion.section>
                
                {/* Closing CTA */}
                <motion.section variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl shadow-lg text-center">
                    <h2 className="text-3xl font-bold">MDE.AI turns your idea into a pitch, your pitch into a plan, and your plan into opportunity.</h2>
                    <p className="mt-4 text-[#F3B93C] font-semibold">Join the Medellín AI ecosystem and start building smarter.</p>
                </motion.section>

            </motion.div>
        </main>
    );
};

export default HowItWorks;