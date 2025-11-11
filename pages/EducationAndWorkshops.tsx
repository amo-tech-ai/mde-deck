import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { TrainingTrackCard } from '../components/TrainingTrackCard';
import { SpeakerCard } from '../components/SpeakerCard';
import { ModuleLibrary } from '../components/ModuleLibrary';
import { LearningFlowDiagram } from '../components/LearningFlowDiagram';
import { PartnerLogoWall } from '../components/PartnerLogoWall';
import { FlowerIcon, CircleIcon, BrainIcon, ChartIcon, RocketIcon, CommunityIcon, CheckIcon } from '../components/DecorativeElements';

const EducationAndWorkshops: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at 10% 80%, rgba(243, 185, 60, 0.05), transparent 40%), radial-gradient(circle at 80% 20%, rgba(0, 51, 79, 0.05), transparent 40%), #FBF6F1'
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
    
    const tracks = [
        { icon: <BrainIcon/>, title: 'AI for Founders Track', description: 'From MVP to fundraising—learn to leverage AI at every stage of your startup journey.', color: 'deep-blue' as const },
        { icon: <ChartIcon/>, title: 'Technical AI & Engineering', description: 'Deep dives into LLMs, computer vision, and deploying models at scale.', color: 'off-white' as const },
        { icon: <RocketIcon/>, title: 'Growth & Product Track', description: 'Use AI to build better products, optimize marketing, and scale user acquisition.', color: 'off-white' as const },
        { icon: <CommunityIcon/>, title: 'Ecosystem & Leadership', description: 'Explore AI ethics, policy, and how to build a thriving innovation community.', color: 'deep-blue' as const },
    ];
    
    const speakers = [
        { photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', name: 'Dr. Alejandro Velez', title: 'Director of AI', organization: 'Ruta N', topic: 'The Future of Generative AI in LATAM', date: 'Dec 12, 2025' },
        { photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop', name: 'Isabella Rojas', title: 'CEO', organization: 'Cogniflow AI', topic: 'Building a No-Code AI Unicorn', date: 'Jan 15, 2026' },
        { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', name: 'Santiago Gomez', title: 'Lead ML Engineer', organization: 'Google', topic: 'Advanced RAG Techniques', date: 'Feb 02, 2026' },
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Stay Ahead of the Curve. Learn with AI Leaders.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                        Access live workshops, on-demand courses, and expert-led training designed for founders, engineers, and innovators in the AI ecosystem.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Explore All Courses</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">Become a Partner</button>
                    </div>
                </motion.section>

                {/* Training Tracks */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tracks.map(t => <TrainingTrackCard key={t.title} {...t} />)}
                </motion.section>

                {/* Learning Flow */}
                <motion.section variants={itemVariants} className="w-full bg-white/50 p-8 rounded-3xl border border-gray-200">
                     <h2 className="text-3xl font-bold text-[#00334F] text-center mb-4">Learn. Build. Innovate.</h2>
                     <p className="text-center text-[#6E6E6E] mb-4">A simple, powerful learning experience for everyone.</p>
                    <LearningFlowDiagram />
                </motion.section>

                {/* On-Demand Library */}
                <motion.section variants={itemVariants} className="w-full">
                    <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">On-Demand Module Library</h2>
                    <ModuleLibrary />
                </motion.section>

                 {/* Value Proposition */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-96 rounded-3xl bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')"}}/>
                    <div>
                        <h2 className="text-3xl font-bold text-[#00334F]">World-Class Knowledge, Medellín’s Community.</h2>
                        <p className="text-[#6E6E6E] my-4">We partner with global tech leaders and local institutions to bring you cutting-edge AI education that's relevant, practical, and community-focused.</p>
                        <ul className="space-y-2">
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Live sessions with Q&amp;A</li>
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Practical, hands-on workshops</li>
                           <li className="flex items-center font-semibold text-[#1E1E1E]"><CheckIcon className="w-5 h-5 text-green-500 mr-3"/>Exclusive access for MDE.AI members</li>
                        </ul>
                    </div>
                </motion.section>


                {/* Featured Speakers */}
                <motion.section variants={itemVariants} className="w-full">
                     <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">Featured Speakers &amp; Instructors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {speakers.map(s => <SpeakerCard key={s.name} {...s} />)}
                    </div>
                </motion.section>

                {/* Partners */}
                <motion.section variants={itemVariants} className="w-full">
                    <PartnerLogoWall caption="In partnership with leading universities, startups, and tech companies." />
                </motion.section>

                {/* CTA Bar */}
                <motion.div variants={itemVariants} className="w-full bg-[#00334F] text-white p-8 rounded-3xl text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Ready to Upskill?</h2>
                    <p className="mt-2 text-white/80">Join our next session and connect with the minds shaping the future of AI.</p>
                    <button className="mt-6 bg-[#E97A41] text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">View Upcoming Workshops</button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default EducationAndWorkshops;
