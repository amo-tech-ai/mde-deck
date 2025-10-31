import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: '2020', startups: 5 },
  { name: '2021', startups: 8 },
  { name: '2022', startups: 15 },
  { name: '2023', startups: 25 },
  { name: '2024', startups: 40 },
  { name: '2025', startups: 60 },
];

export const EcosystemBarChart: React.FC = () => {
    return (
        <motion.div
            className="w-full h-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <defs>
                         <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2D6F8E" />
                            <stop offset="100%" stopColor="#00334F" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#00334F" strokeOpacity={0.1} />
                    <XAxis dataKey="name" stroke="#6E6E6E" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#6E6E6E" tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#FBF6F1', border: '1px solid #00334F', borderRadius: '1rem' }} cursor={{fill: 'rgba(0, 51, 79, 0.05)'}}/>
                    <Bar dataKey="startups" radius={[8, 8, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#E97A41' : 'url(#barGradient)'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};
