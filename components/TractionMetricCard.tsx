import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import type { TractionMetricCardProps } from '../types';

const Counter: React.FC<{ from: number, to: number, suffix: string }> = ({ from, to, suffix }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            animate(from, to, {
                duration: 2,
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                },
            });
        }
    }, [inView, from, to]);

    return <span ref={ref} />;
};


export const TractionMetricCard: React.FC<TractionMetricCardProps> = ({ value, label, context, color, children }) => {
    const colorClasses = {
        'deep-blue': 'bg-[#00334F] text-white',
        'off-white': 'bg-white/60 border border-gray-200 text-[#1E1E1E]',
        'mustard': 'bg-[#F3B93C]/80 text-[#1E1E1E]',
    };

    const valueNum = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const valueSuffix = value.replace(/[0-9,]/g, '');

    return (
        <motion.div
            className={`p-6 rounded-3xl flex flex-col justify-between h-full ${colorClasses[color]}`}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
            <div>
                <div className={`text-5xl font-extrabold ${color === 'deep-blue' ? 'text-white' : 'text-[#00334F]'}`}>
                    {isNaN(valueNum) ? value : <><Counter from={0} to={valueNum} suffix={valueSuffix}/>{valueSuffix}</>}
                </div>
                <div className="text-lg font-bold mt-2">{label}</div>
            </div>
            <div className="mt-4">
                {children || <p className={`text-sm ${color === 'deep-blue' ? 'text-white/80' : 'text-[#6E6E6E]'}`}>{context}</p>}
            </div>
        </motion.div>
    );
};
