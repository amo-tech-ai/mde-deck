import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { TestimonialProps } from '../types';
import { CogniflowLogo } from './DecorativeElements'; // Assuming this exists or is created

const testimonials: TestimonialProps[] = [
  { 
    quote: "The MDE.AI perks library saved us $6,000 in our first quarter. The onboarding was instant—it felt like having a co-founder in our corner.",
    name: 'Carlos Méndez',
    role: 'CEO at Cogniflow AI',
    logo: <CogniflowLogo className="h-6"/>, // Placeholder
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  { 
    quote: "Access to premium AI tools and cloud credits was a game-changer for our MVP development. We moved twice as fast.",
    name: 'Sofia Rodriguez',
    role: 'Founder of LinkedAI',
    logo: <div className="font-bold">LinkedAI</div>,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    quote: "More than just savings, it's the access to a curated ecosystem. It validates your journey and connects you with the right people.",
    name: 'Juan Martinez',
    role: 'Lead at Tesoro AI',
    logo: <div className="font-bold">Tesoro AI</div>,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, logo, image }) => (
    <div className="w-96 h-full bg-white/60 border border-gray-200 rounded-3xl p-6 flex-shrink-0 flex flex-col justify-between">
        <p className="text-[#1E1E1E] font-medium">"{quote}"</p>
        <div className="flex items-center gap-4 mt-6">
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover"/>
            <div>
                <div className="font-bold text-[#00334F]">{name}</div>
                <div className="text-sm text-[#6E6E6E]">{role}</div>
            </div>
            <div className="ml-auto text-[#00334F]/50">{logo}</div>
        </div>
    </div>
);

export const TestimonialCarousel: React.FC = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="w-full">
            <motion.div className="w-full overflow-hidden cursor-grab" ref={constraintsRef}>
                <motion.div
                    className="flex gap-6 p-2"
                    drag="x"
                    dragConstraints={constraintsRef}
                >
                    {[...testimonials, ...testimonials].map((testimonial, i) => (
                        <TestimonialCard key={`${testimonial.name}-${i}`} {...testimonial} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};
