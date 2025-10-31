import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Q1 25', users: 50, milestone: 'Beta Launch' },
  { name: 'Q2 25', users: 200, milestone: '100 Decks' },
  { name: 'Q3 25', users: 450, milestone: 'Ruta N Partnership' },
  { name: 'Q4 25', users: 800, milestone: null },
  { name: 'Q1 26', users: 1500, milestone: '500 Active Founders' },
  { name: 'Q2 26', users: 2500, milestone: null },
  { name: 'Q3 26', users: 4000, milestone: null },
  { name: 'Q4 26', users: 5500, milestone: null },
];

export const GrowthProjectionChart: React.FC = () => {
    return (
        <motion.div
            className="w-full h-96 bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="font-bold text-[#00334F] text-lg mb-4">Projected User Growth</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00334F" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#00334F" stopOpacity={0}/>
                        </linearGradient>
                         <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#00334F" />
                            <stop offset="100%" stopColor="#E97A41" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#00334F" strokeOpacity={0.1} />
                    <XAxis dataKey="name" stroke="#6E6E6E" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#6E6E6E" tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#FBF6F1', border: '1px solid #00334F', borderRadius: '1rem' }} />
                    <Area type="monotone" dataKey="users" stroke="url(#lineGradient)" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                    {data.map((entry, index) => entry.milestone && (
                        <ReferenceDot key={`dot-${index}`} x={entry.name} y={entry.users} r={6} fill="#E97A41" stroke="#FBF6F1" strokeWidth={2} isFront={true}>
                             <text x={entry.name} y={entry.users} dy={-15} textAnchor="middle" fontSize={10} fill="#00334F">{entry.milestone}</text>
                        </ReferenceDot>
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
};
