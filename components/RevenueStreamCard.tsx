import React from 'react';
import { motion } from 'framer-motion';
import type { RevenueStreamCardProps } from '../types';

export const RevenueStreamCard: React.FC<RevenueStreamCardProps> = ({ title, description, accentColor, backgroundColor, textColor, children }) => {
    return (
        <motion.div
            className={`p-6 rounded-3xl border ${backgroundColor} ${textColor} relative overflow-hidden h-full flex flex-col`}
            style={{ borderColor: accentColor }}
            whileHover={{ y: -5, boxShadow: `0 10px 20px rgba(0, 51, 79, 0.1)` }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="absolute top-0 left-0 h-2 w-1/3" style={{ backgroundColor: accentColor }} />
            <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm opacity-80">{description}</p>
            </div>
            {children && <div className="mt-4">{children}</div>}
        </motion.div>
    );
};
