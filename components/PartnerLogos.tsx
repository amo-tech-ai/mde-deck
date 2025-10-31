import React from 'react';
import { motion } from 'framer-motion';
import { RutaNLogo, EAFITLogo, C4IRLogo, ACILogo } from './DecorativeElements';

const logos = [
    { Component: RutaNLogo, name: 'Ruta N' },
    { Component: EAFITLogo, name: 'EAFIT' },
    { Component: C4IRLogo, name: 'C4IR' },
    { Component: ACILogo, name: 'ACI Medellín' },
];

export const PartnerLogos: React.FC = () => {
    return (
        <div className="w-full text-center">
            <p className="mb-6 font-semibold text-[#6E6E6E]">Supported by Medellín’s leading innovation and AI institutions.</p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
                {logos.map(({ Component, name }, index) => (
                    <motion.div
                        key={name}
                        className="text-gray-400 font-bold text-xl transition-colors duration-300 hover:text-[#00334F]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Component className="h-8" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
