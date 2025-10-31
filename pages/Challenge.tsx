import React from 'react';
import { motion } from 'framer-motion';
import { FlowerIcon, CircleIcon, DesignIcon, AccessIcon, TimeIcon } from '../components/DecorativeElements';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode; isHighlighted?: boolean; }> = ({ title, description, icon, isHighlighted }) => {
    const cardClasses = isHighlighted
        ? 'bg-[#00334F] text-white'
        : 'bg-white/60 border border-gray-200 text-[#1E1E1E]';

    return (
        <motion.div
            className={`p-8 rounded-3xl text-left h-full flex flex-col ${cardClasses}`}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
            <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center ${isHighlighted ? 'bg-white/10' : 'bg-[#00334F]/10'}`}>
                {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 ' + (isHighlighted ? 'text-white' : 'text-[#00334F]') })}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className={`text-sm ${isHighlighted ? 'text-white/80' : 'text-[#6E6E6E]'}`}>{description}</p>
        </motion.div>
    );
};

const Challenge: React.FC = () => {
    const mainStyle = {
        background: 'radial-gradient(circle at 90% 10%, rgba(233, 122, 65, 0.1), transparent 30%), #FBF6F1'
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    
    const painPoints = [
        { title: "Lack of Design Resources", description: "Founders often spend days creating decks that fail to tell their story clearly.", icon: <DesignIcon /> },
        { title: "Limited Investor Access", description: "Without polished materials, startups lose visibility to accelerators and VCs.", icon: <AccessIcon />, isHighlighted: true },
        { title: "Time-Consuming Process", description: "Manual deck creation slows down innovation and fundraising momentum.", icon: <TimeIcon /> }
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
                <FlowerIcon className="absolute top-[5%] right-[10%] w-6 h-6 text-[#F3B93C] opacity-80" />
                <CircleIcon className="absolute bottom-[10%] left-[5%] w-4 h-4 text-[#00334F]" />

                {/* Header */}
                <motion.section variants={itemVariants} className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">The Challenge Facing Founders in Medellín’s AI Ecosystem</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-4xl mx-auto">
                        Building an investor-ready startup takes time, design skills, and access to capital—resources many founders struggle to find.
                    </p>
                </motion.section>

                {/* Visual Story */}
                 <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-3 h-80 rounded-3xl bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop')"}}>
                    </div>
                     <div className="md:col-span-2 bg-[#00334F]/5 p-6 rounded-2xl text-center">
                        <div className="text-5xl font-extrabold text-[#E97A41]">80%</div>
                        <p className="mt-2 font-semibold text-[#00334F]">of early founders spend 10+ hours creating a pitch deck manually.</p>
                     </div>
                 </motion.section>


                {/* Pain Points */}
                <motion.section variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {painPoints.map(p => <FeatureCard key={p.title} {...p} />)}
                </motion.section>
                
                {/* Footer Element */}
                <motion.p variants={itemVariants} className="text-center text-[#6E6E6E] max-w-2xl">
                    MDE.AI was created to remove these barriers—helping founders design, fund, and grow faster.
                </motion.p>
            </motion.div>
        </main>
    );
};

export default Challenge;
