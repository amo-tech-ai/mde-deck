import React from 'react';
import { motion } from 'framer-motion';
import { RevenueLoopDiagram } from '../components/RevenueLoopDiagram';
import { RevenueStreamCard } from '../components/RevenueStreamCard';
import { AcquisitionFunnel } from '../components/AcquisitionFunnel';
import { MiniLineChart, MiniBarChart } from '../components/MiniCharts';
import { FlowerIcon, CircleIcon, GiftIcon, TagIcon, BriefcaseIcon, BulletIcon } from '../components/DecorativeElements';

const BusinessModel: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at top right, rgba(0, 51, 79, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(233, 122, 65, 0.05), transparent 40%), #FBF6F1'
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };
    
    return (
        <main style={mainStyle} className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 text-[#1E1E1E] overflow-hidden">
            <motion.div
                className="w-full max-w-7xl bg-transparent relative p-4 lg:p-8 flex flex-col items-center justify-center space-y-12"
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
            >
                {/* Decorative Elements */}
                <FlowerIcon className="absolute top-[2%] right-[5%] w-8 h-8 text-[#E97A41] opacity-60" />
                <CircleIcon className="absolute top-[10%] left-[8%] w-4 h-4 text-[#00334F]" />

                {/* Hero Section */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F] leading-tight">A Scalable SaaS Business Model Designed for Founders.</h1>
                        <p className="mt-4 text-lg text-[#6E6E6E]">MDE.AI combines subscription-based revenue with accelerator partnerships and marketplace commissions—creating a sustainable, multi-channel model.</p>
                    </div>
                    <div className="h-48">
                        <RevenueLoopDiagram />
                    </div>
                </motion.section>

                {/* Revenue Streams */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    <RevenueStreamCard title="Subscription Plans" description="Monthly and annual subscriptions for founders and startups accessing advanced AI tools." accentColor="#FFFFFF" backgroundColor="bg-[#00334F]" textColor="text-white">
                        <MiniLineChart />
                    </RevenueStreamCard>
                    <RevenueStreamCard title="Accelerator Partnerships" description="Accelerators and innovation programs purchase team licenses for their cohorts." accentColor="#E97A41" backgroundColor="bg-white/50" textColor="text-[#1E1E1E]">
                        <MiniBarChart />
                    </RevenueStreamCard>
                     <RevenueStreamCard title="Perks & Marketplace" description="Commission-based revenue from partner perks, job listings, and sponsorships." accentColor="#F3B93C" backgroundColor="bg-white/50" textColor="text-[#1E1E1E]">
                         <div className="flex justify-around items-center h-full text-[#F3B93C]">
                            <GiftIcon className="w-8 h-8" />
                            <TagIcon className="w-8 h-8" />
                            <BriefcaseIcon className="w-8 h-8" />
                         </div>
                    </RevenueStreamCard>
                </motion.section>

                {/* Customer Acquisition */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-[#00334F] mb-4">Growth & Customer Acquisition</h2>
                        <p className="text-[#6E6E6E] mb-4">MDE.AI acquires users through founder networks, accelerator integrations, and performance marketing.</p>
                        <ul className="space-y-2 text-[#1E1E1E]">
                            <li className="flex items-center"><BulletIcon className="w-4 h-4 text-[#00334F] mr-2"/>Founder Referrals & Community</li>
                            <li className="flex items-center"><BulletIcon className="w-4 h-4 text-[#00334F] mr-2"/>Accelerator API Partnerships</li>
                            <li className="flex items-center"><BulletIcon className="w-4 h-4 text-[#00334F] mr-2"/>Content Marketing & AI Demos</li>
                        </ul>
                    </div>
                    <div>
                        <AcquisitionFunnel />
                    </div>
                </motion.section>
                
                 {/* KPIs */}
                <motion.section variants={itemVariants} className="w-full bg-[#00334F] text-white p-4 rounded-3xl flex justify-around items-center text-center">
                    <div>
                        <div className="font-extrabold text-2xl">>20%</div>
                        <div className="text-xs opacity-80">Free-to-Paid Conversion</div>
                    </div>
                     <div className="h-10 w-px bg-white/20" />
                    <div>
                        <div className="font-extrabold text-2xl">$250K</div>
                        <div className="text-xs opacity-80">ARR Target (12 Mos)</div>
                    </div>
                     <div className="h-10 w-px bg-white/20" />
                    <div>
                        <div className="font-extrabold text-2xl">{"< $10"}</div>
                        <div className="text-xs opacity-80">CAC / Founder</div>
                    </div>
                </motion.section>

            </motion.div>
        </main>
    );
};

export default BusinessModel;
