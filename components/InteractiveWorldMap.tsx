import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cities = [
  { name: 'San Francisco', event: 'AI Agent Founders Meetup', date: 'Feb 2025', x: '10%', y: '35%' },
  { name: 'London', event: 'AI Tech World', date: 'Mar 2025', x: '48%', y: '28%' },
  { name: 'Amsterdam', event: 'World AI Summit', date: 'Oct 2025', x: '50%', y: '29%' },
  { name: 'Geneva', event: 'AI for Good Summit', date: 'May 2025', x: '51%', y: '33%' },
  { name: 'Medellín', event: 'MDE.AI Conf', date: 'Nov 2025', x: '25%', y: '55%' },
  { name: 'Tokyo', event: 'Japan IT Week', date: 'Apr 2025', x: '85%', y: '36%' },
  { name: 'Prague', event: 'Innovation Week', date: 'Oct 2025', x: '54%', y: '30%' },
  { name: 'Skopje', event: 'Startup Revolution', date: 'Sep 2025', x: '56%', y: '35%' },
];

export const InteractiveWorldMap: React.FC = () => {
    const [hoveredCity, setHoveredCity] = useState<(typeof cities[0]) | null>(null);

    return (
        <div className="w-full h-[500px] bg-[#00334F]/5 rounded-3xl relative overflow-hidden p-6">
            <motion.img 
                src="https://raw.githubusercontent.com/d3/d3.github.com/master/world-110m.v1.json"
                alt="World Map"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                style={{
                    backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/World_map_-_low_resolution._grey.svg/1280px-World_map_-_low_resolution._grey.svg.png')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            {cities.map((city, i) => (
                <motion.div
                    key={city.name}
                    className="absolute"
                    style={{ left: city.x, top: city.y, transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: i * 0.1 }}
                >
                    <div className="w-4 h-4 rounded-full bg-[#E97A41] cursor-pointer relative flex items-center justify-center">
                        <div className="absolute w-full h-full rounded-full bg-[#E97A41] animate-ping" />
                    </div>
                </motion.div>
            ))}
            {hoveredCity && (
                <motion.div
                    className="absolute bg-white p-3 rounded-lg shadow-lg text-sm"
                    style={{ left: hoveredCity.x, top: hoveredCity.y, transform: 'translate(10px, -60px)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="font-bold text-[#00334F]">{hoveredCity.event}</div>
                    <div className="text-[#6E6E6E]">{hoveredCity.name} - {hoveredCity.date}</div>
                </motion.div>
            )}
             <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[#6E6E6E]">
                The AI world is closer than ever — connect, collaborate, and grow.
            </p>
        </div>
    );
};
