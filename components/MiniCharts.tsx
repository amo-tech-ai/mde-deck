import React from 'react';
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Q1', value: 100 },
  { name: 'Q2', value: 300 },
  { name: 'Q3', value: 200 },
  { name: 'Q4', value: 400 },
];

const barData = [
  { name: 'Q1', value: 2 },
  { name: 'Q2', value: 3 },
  { name: 'Q3', value: 5 },
  { name: 'Q4', value: 8 },
];

export const MiniLineChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={60}>
        <AreaChart data={lineData}>
            <defs>
                <linearGradient id="miniLineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#FFFFFF" strokeWidth={2} fill="url(#miniLineGradient)" />
        </AreaChart>
    </ResponsiveContainer>
);

export const MiniBarChart: React.FC = () => (
    <ResponsiveContainer width="100%" height={60}>
        <BarChart data={barData}>
            <Bar dataKey="value" fill="#E97A41" radius={[4, 4, 0, 0]} />
        </BarChart>
    </ResponsiveContainer>
);
