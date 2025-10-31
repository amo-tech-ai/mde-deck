import React from 'react';
import { motion } from 'framer-motion';
import { AWSLogo, GoogleLogo, MicrosoftLogo, OpenAILogo, SupabaseLogo, NotionLogo, ZapierLogo, RutaNLogo } from './DecorativeElements';

const logos = [
    { Component: AWSLogo, name: 'AWS' },
    { Component: GoogleLogo, name: 'Google for Startups' },
    { Component: MicrosoftLogo, name: 'Microsoft' },
    { Component: OpenAILogo, name: 'OpenAI' },
    { Component: SupabaseLogo, name: 'Supabase' },
    { Component: NotionLogo, name: 'Notion' },
    { Component: ZapierLogo, name: 'Zapier' },
    { Component: RutaNLogo, name: 'Ruta N' },
];

export const PartnerLogoWall: React.FC = () => {
    return (
        <div className="w-full text-center">
            <p className="mb-8 font-semibold text-[#6E6E6E]">Trusted by the world’s leading startup partners.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-6 items-center">
                {logos.map(({ Component, name }, index) => (
                    <motion.div
                        key={name}
                        className="text-gray-400 font-bold text-lg transition-colors duration-300 hover:text-[#00334F]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Component className="h-8 mx-auto" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};