import React from 'react';
import { motion } from 'framer-motion';
import type { JobCardProps } from '../types';
import { CogniflowLogo, LinkedAiLogo, TesoroAiLogo } from './DecorativeElements';

const jobs: JobCardProps[] = [
    { title: 'AI Research Engineer', company: 'Cogniflow AI', logo: <CogniflowLogo className="h-6"/>, location: 'Remote (LATAM)', summary: 'Develop and implement cutting-edge machine learning models.', tags: ['Full-time', 'Engineering'], isHot: true },
    { title: 'Senior Product Manager, AI', company: 'Tesoro AI', logo: <TesoroAiLogo className="h-6"/>, location: 'Medellín, CO', summary: 'Lead the product strategy for our core AI-powered talent platform.', tags: ['Full-time', 'Product'], isFeatured: true },
    { title: 'Data Annotation Specialist', company: 'LinkedAI', logo: <LinkedAiLogo className="h-6"/>, location: 'Hybrid', summary: 'Ensure high-quality data labeling for computer vision projects.', tags: ['Internship', 'Data'] },
    { title: 'Lead Frontend Developer', company: 'Cogniflow AI', logo: <CogniflowLogo className="h-6"/>, location: 'Remote', summary: 'Build and mentor a team creating intuitive user interfaces for AI tools.', tags: ['Full-time', 'Engineering'] },
    { title: 'AI Ethics Researcher', company: 'MDE.AI Labs', logo: <div>MDE.AI</div>, location: 'Medellín, CO', summary: 'Investigate and establish ethical guidelines for AI development in LATAM.', tags: ['Research', 'Contract'] },
    { title: 'Community Manager, AI', company: 'Ruta N', logo: <div>Ruta N</div>, location: 'Medellín, CO', summary: 'Foster and grow the AI developer and founder community.', tags: ['Full-time', 'Community'], isFeatured: true },
];

const JobCard: React.FC<JobCardProps> = ({ title, company, logo, location, summary, tags, isFeatured, isHot }) => {
    const cardClasses = isFeatured
        ? 'bg-[#00334F] text-white'
        : 'bg-white/60 border border-gray-200 text-[#1E1E1E]';

    return (
        <motion.div
            className={`p-6 rounded-3xl flex flex-col justify-between h-full relative ${cardClasses}`}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
            {isHot && <div className="absolute top-4 right-4 text-xs font-bold py-1 px-2 rounded-full bg-[#E97A41] text-white">🔥 Hot Role</div>}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isFeatured ? 'bg-white/10' : 'bg-gray-200'}`}>
                        {logo}
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className={`text-xs ${isFeatured ? 'text-white/70' : 'text-[#6E6E6E]'}`}>{location}</div>
                    </div>
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className={`text-sm mt-2 ${isFeatured ? 'text-white/80' : 'text-[#6E6E6E]'}`}>{summary}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                    {tags.map(tag => (
                        <span key={tag} className={`text-xs font-semibold py-1 px-2 rounded-full ${isFeatured ? 'bg-white/10 text-white' : 'bg-[#00334F]/10 text-[#00334F]'}`}>{tag}</span>
                    ))}
                </div>
                <button className={`font-bold text-sm ${isFeatured ? 'text-[#F3B93C]' : 'text-[#E97A41]'}`}>View</button>
            </div>
        </motion.div>
    );
};

export const JobCardGrid: React.FC = () => {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">Explore the Latest Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => <JobCard key={job.title + job.company} {...job} />)}
            </div>
        </div>
    );
};
