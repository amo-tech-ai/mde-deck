import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { BenefitCard } from '../components/BenefitCard';
import { PerksGrid } from '../components/PerksGrid';
import { HowItWorksFlow } from '../components/HowItWorksFlow';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { PartnerLogoWall } from '../components/PartnerLogoWall';
import { FlowerIcon, CircleIcon, CloudIcon, AiIcon, GradCapIcon, NetworkIcon, CheckIcon } from '../components/DecorativeElements';

const PerksAndBenefits: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top left, rgba(0, 51, 79, 0.05), transparent 30%), radial-gradient(circle at bottom right, rgba(243, 185, 60, 0.05), transparent 40%), #FBF6F1'
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

    const benefits = [
        { icon: <CloudIcon/>, title: 'Cloud & AI Credits', description: 'Get up to $10,000 in credits from cloud and AI partners.', color: 'deep-blue' as const },
        { icon: <AiIcon/>, title: 'AI Tools & SaaS Discounts', description: 'Access software like Notion, Figma, and Zapier at startup rates.', color: 'off-white' as const },
        { icon: <GradCapIcon/>, title: 'Training & Mentorship', description: 'Join workshops, courses, and AMAs with AI leaders.', color: 'off-white' as const },
        { icon: <NetworkIcon/>, title: 'Network & Community', description: 'Connect with founders, investors, and mentors in Medellín & beyond.', color: 'deep-blue' as const },
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
                <FlowerIcon className="absolute top-[2%] left-[5%] w-8 h-8 text-[#E97A41] opacity-50" />
                <CircleIcon className="absolute top-[10%] right-[8%] w-4 h-4 text-[#00334F]" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Unlock the Tools That Power Startup Growth.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        Get exclusive access to perks, credits, and partner offers worth thousands—curated for founders building with AI.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Claim My Founder Perks</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Explore Partner Offers</button>
                    </div>
                </motion.section>
                
                {/* Featured Value Cards */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map(b => <BenefitCard key={b.title} {...b} />)}
                </motion.section>

                {/* Featured Perks Grid */}
                <motion.section variants={itemVariants} className="w-full">
                    <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">Featured Perks</h2>
                    <PerksGrid />
                </motion.section>

                {/* How It Works Flow */}
                <motion.section variants={itemVariants} className="w-full bg-white/50 p-8 rounded-3xl">
                     <h2 className="text-3xl font-bold text-[#00334F] text-center mb-4">Simple, Fast, Founder-Friendly.</h2>
                     <p className="text-center text-[#6E6E6E] mb-4">Redeem startup perks in three easy steps—no forms, no waiting.</p>
                    <HowItWorksFlow />
                </motion.section>
                
                {/* Value Proposition Section */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#00334F]">Built by Founders, for Founders.</h2>
                        <p className="text-[#6E6E6E] my-4">MDE.AI’s Perks & Benefits platform helps startups save thousands on essential tools—freeing up time and budget to focus on innovation.</p>
                        <ul className="space-y-2">
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Save up to 80% on essential software.</li>
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Access a curated library built for AI founders.</li>
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Join a network of 400+ startups across LATAM.</li>
                        </ul>
                    </div>
                    <div className="h-80 bg-white/60 rounded-3xl p-6 border border-gray-200">
                        <h4 className="font-bold text-[#00334F] mb-4">Your Savings Dashboard</h4>
                        <div className="space-y-4">
                            <div className="bg-[#FBF6F1] p-4 rounded-xl">
                                <div className="text-sm text-[#6E6E6E]">Total Value Claimed</div>
                                <div className="text-3xl font-extrabold text-[#00334F]">$12,500</div>
                            </div>
                            <div className="bg-[#FBF6F1] p-4 rounded-xl">
                                <div className="text-sm text-[#6E6E6E]">Active Perks</div>
                                <div className="text-3xl font-extrabold text-[#00334F]">5</div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Testimonial Carousel */}
                <motion.section variants={itemVariants} className="w-full">
                    <TestimonialCarousel />
                </motion.section>
                
                {/* Partner Logos */}
                <motion.section variants={itemVariants} className="w-full">
                    <PartnerLogoWall />
                </motion.section>

                {/* CTA Bar */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Join Medellín’s Fastest-Growing Founder Network.</h2>
                    <p className="mt-2 text-white/80">Claim your perks, connect with partners, and build smarter with MDE.AI.</p>
                    <button className="mt-6 bg-[#E97A41] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">Unlock My Startup Benefits</button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default PerksAndBenefits;