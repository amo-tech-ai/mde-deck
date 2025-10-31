import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PerkProps } from '../types';
import { AWSLogo, GoogleLogo, MicrosoftLogo, OpenAILogo, SupabaseLogo, NotionLogo, ZapierLogo } from './DecorativeElements';

const allPerks: PerkProps[] = [
  { logo: <AWSLogo className="h-8"/>, title: 'AWS Activate Credits', description: 'For AI startups using cloud infrastructure.', value: '$5,000 Value', category: 'Cloud' },
  { logo: <GoogleLogo className="h-8"/>, title: 'Google for Startups', description: 'Cloud credits and technical support.', value: '$10,000 Value', category: 'Cloud' },
  { logo: <MicrosoftLogo className="h-8"/>, title: 'Microsoft for Startups', description: 'Azure credits and expert guidance.', value: '$10,000 Value', category: 'Cloud' },
  { logo: <OpenAILogo className="h-8"/>, title: 'OpenAI API Credits', description: 'Build with the latest AI models.', value: '$1,000 Value', category: 'AI Tools' },
  { logo: <NotionLogo className="h-8"/>, title: 'Notion Plus', description: 'Organize your team and projects.', value: 'Free 12 Months', category: 'Productivity' },
  { logo: <ZapierLogo className="h-8"/>, title: 'Zapier for Teams', description: 'Automate your workflows.', value: '50% Off', category: 'Productivity' },
  { logo: <SupabaseLogo className="h-8"/>, title: 'Supabase Pro', description: 'Open source Firebase alternative.', value: '$1,000 Credit', category: 'AI Tools' },
];

const categories = ['All', 'Cloud', 'AI Tools', 'Productivity', 'Legal', 'Finance', 'Education'];

const PerkCard: React.FC<PerkProps> = ({ logo, title, description, value }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white/60 border border-gray-200 p-6 rounded-3xl"
    >
        <div className="flex items-center gap-4 mb-4 text-[#00334F] font-bold">{logo}</div>
        <h4 className="font-bold text-[#00334F]">{title}</h4>
        <p className="text-sm text-[#6E6E6E] my-2">{description}</p>
        {value && <span className="text-xs font-bold py-1 px-2 rounded-full bg-[#E97A41]/20 text-[#E97A41]">{value}</span>}
        <button className="mt-4 w-full bg-[#00334F] text-white font-bold py-2 rounded-full hover:bg-[#2D6F8E] transition-colors">Claim Offer</button>
    </motion.div>
);

export const PerksGrid: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPerks = activeCategory === 'All'
        ? allPerks
        : allPerks.filter(p => p.category === activeCategory);

    return (
        <div className="w-full">
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                            activeCategory === category
                                ? 'bg-[#00334F] text-white'
                                : 'bg-white/50 text-[#6E6E6E] hover:bg-[#00334F]/10'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredPerks.map(perk => <PerkCard key={perk.title} {...perk} />)}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};