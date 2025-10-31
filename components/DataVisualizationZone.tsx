import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CheckIcon } from './DecorativeElements';

const revenueData = [
  { name: 'Y1', revenue: 4000 },
  { name: 'Y2', revenue: 9000 },
  { name: 'Y3', revenue: 20000 },
];

const expenseData = [
  { name: 'R&D', value: 400 },
  { name: 'Marketing', value: 300 },
  { name: 'Ops', value: 300 },
];
const COLORS = ['#00334F', '#E97A41', '#F3B93C'];

export const DataVisualizationZone: React.FC = () => {
    return (
        <motion.div
            className="w-full bg-[#00334F] p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-white/5 p-6 rounded-2xl">
                <h4 className="font-bold mb-4">Revenue Growth & Expense Breakdown</h4>
                <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData}>
                            <Bar dataKey="revenue" fill="#F3B93C" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-32 mt-4">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={expenseData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#8884d8" paddingAngle={5} dataKey="value">
                                {expenseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Intelligent Insights in Seconds.</h3>
                <p className="mt-2 text-white/80 mb-6">Our AI analyzes market trends and your unique inputs to create forecasts that are both ambitious and achievable.</p>
                <ul className="space-y-3">
                    <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3"/>3-Year Growth Forecasts</li>
                    <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3"/>Market Size & AI Ecosystem Data</li>
                    <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3"/>Custom Scenario Modeling</li>
                    <li className="flex items-center"><CheckIcon className="w-5 h-5 text-green-400 mr-3"/>Auto-generated Executive Summary</li>
                </ul>
                 <div className="mt-6 bg-white/10 p-4 rounded-xl text-center">
                    <span className="text-sm">Projected Growth</span>
                    <div className="text-3xl font-extrabold text-[#F3B93C]">+210%</div>
                </div>
            </div>
        </motion.div>
    );
};