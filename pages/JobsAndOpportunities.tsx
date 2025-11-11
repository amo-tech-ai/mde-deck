import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FlowerIcon, CircleIcon, CheckIcon, SkillDiscoveryIcon, RocketIcon, NetworkIcon } from '../components/DecorativeElements';
import { MatchingFlowDiagram } from '../components/MatchingFlowDiagram';
import { JobCardGrid } from '../components/JobCardGrid';
import { CandidateBenefitCard } from '../components/CandidateBenefitCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { PartnerLogoWall } from '../components/PartnerLogoWall';

const JobsAndOpportunities: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at 10% 20%, rgba(0, 51, 79, 0.05), transparent 40%), radial-gradient(circle at 90% 80%, rgba(233, 122, 65, 0.05), transparent 40%), #FBF6F1'
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
    
    const candidateBenefits = [
        { icon: <SkillDiscoveryIcon/>, title: 'AI Skill Discovery', description: 'Get personalized suggestions on which AI skills to learn next.' },
        { icon: <RocketIcon/>, title: 'Startup Opportunities', description: 'Join fast-growing AI startups solving real-world problems.' },
        { icon: <NetworkIcon/>, title: 'Networking & Events', description: 'Access meetups, workshops, and founder introductions.' },
    ];

    return (
        <main style={mainStyle} className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 text-[#1E1E1E] overflow-hidden">
            <motion.div
                className="w-full max-w-7xl bg-transparent relative p-4 lg:p-8 flex flex-col items-center justify-center space-y-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative Elements */}
                <FlowerIcon className="absolute top-[2%] left-[5%] w-8 h-8 text-[#E97A41] opacity-50" />
                <CircleIcon className="absolute top-[10%] right-[8%] w-4 h-4 text-[#00334F]" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Find AI Jobs. Hire Brilliant Talent. Grow Your Career.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        MDE.AI connects founders, startups, and innovators through AI-powered matching—helping you discover meaningful opportunities.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Browse Opportunities</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Post a Job</button>
                    </div>
                </motion.section>

                {/* How It Works */}
                <motion.section variants={itemVariants} className="w-full">
                    <MatchingFlowDiagram />
                </motion.section>

                {/* Jobs Feed Grid */}
                <motion.section variants={itemVariants} className="w-full">
                    <JobCardGrid />
                </motion.section>
                
                {/* Founder Hiring Section */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#00334F]">For Founders: Hire the Right People, Fast.</h2>
                        <p className="text-[#6E6E6E] my-4">Our job-matching system connects you with verified professionals, engineers, and creatives ready to join your mission.</p>
                        <ul className="space-y-2">
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Smart Candidate Recommendations</li>
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>AI-Filtered Applications</li>
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Integrated Messaging & Scheduling</li>
                        </ul>
                         <button className="mt-8 bg-[#E97A41] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105">Post a Job</button>
                    </div>
                    <div className="h-96 bg-white/60 rounded-3xl p-6 border border-gray-200">
                        <h4 className="font-bold text-[#00334F] mb-4">Your Hiring Dashboard</h4>
                         <p className="text-sm text-center text-[#6E6E6E] mt-20">Dashboard visualization placeholder</p>
                    </div>
                </motion.section>

                {/* Candidate Growth Section */}
                <motion.section variants={itemVariants} className="w-full bg-gradient-to-br from-[#00334F] to-[#2D6F8E] p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold text-white">For Talent: Build Your Career in AI.</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {candidateBenefits.map(b => <CandidateBenefitCard key={b.title} {...b} />)}
                    </div>
                    <button className="mt-12 bg-white text-[#00334F] font-bold py-3 px-8 rounded-full transition-transform hover:scale-105">Create My Profile</button>
                </motion.section>

                {/* Testimonial Strip */}
                <motion.section variants={itemVariants} className="w-full">
                     <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">Voices from the Community</h2>
                    <TestimonialCarousel />
                </motion.section>

                {/* Partners & Integrations */}
                <motion.section variants={itemVariants} className="w-full">
                    <PartnerLogoWall caption="Connecting startups, talent, and ecosystem partners to accelerate AI innovation." />
                </motion.section>

                {/* CTA Bar */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Your Next AI Opportunity Starts Here.</h2>
                    <p className="mt-2 text-white/80">Whether you’re hiring, applying, or exploring—MDE.AI connects you with what’s next.</p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#E97A41] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Find Jobs</button>
                        <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 hover:bg-white/10">Hire Talent</button>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default JobsAndOpportunities;