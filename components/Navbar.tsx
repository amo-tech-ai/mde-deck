import React from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../App';

interface NavbarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const pages: Page[] = [
    'Introduction',
    'The Challenge',
    'Market Opportunity',
    'Business Model',
    'Traction',
    'Value Proposition',
    'How It Works',
    'AI Pitch Deck Generator',
    'AI Business Plan Generator',
    'AI Events & Networking',
    'Perks & Benefits',
    'Jobs & Opportunities',
    'Education & Workshops'
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    return (
        <nav className="fixed top-0 left-0 h-full w-48 bg-[#00334F]/5 backdrop-blur-sm p-4 flex flex-col items-start justify-center">
            <div className="text-lg font-bold text-[#00334F] mb-6 pl-3">MDE.AI Deck</div>
            <ul className="space-y-2 w-full">
                {pages.map((page) => (
                    <li key={page} className="w-full">
                        <motion.button
                            onClick={() => setActivePage(page)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 relative ${
                                activePage === page ? 'text-[#00334F]' : 'text-[#6E6E6E] hover:bg-[#00334F]/10 hover:text-[#00334F]'
                            }`}
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {activePage === page && (
                                <motion.div
                                    layoutId="active-nav-indicator"
                                    className="absolute inset-0 bg-white/60 rounded-lg z-0 shadow"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 font-semibold">{page}</span>
                        </motion.button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};