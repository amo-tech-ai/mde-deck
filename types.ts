import React from 'react';

// For How It Works
export interface JourneyStepProps {
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface StorytellingCardProps {
    title: string;
    description: string;
    imageUrl: string;
    icon: React.ReactNode;
}

// For Value Proposition
export interface ValuePropCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: 'deep-blue' | 'off-white' | 'mustard';
}

// For Traction
export interface TractionMetricCardProps {
    value: string;
    label: string;
    context: string;
    color: 'deep-blue' | 'off-white' | 'mustard';
    children?: React.ReactNode;
}

export interface TimelineItem {
    quarter: string;
    event: string;
}

export interface Quote {
    text: string;
    author: string;
}

// For Business Model
export interface RevenueStreamCardProps {
    title: string;
    description: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    children?: React.ReactNode;
}

// For Market Opportunity
export interface StatHighlightCardProps {
    value: string;
    label: string;
    source: string;
    icon: React.ReactNode;
    color: string;
}

export interface InitiativeCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    bgColor: string;
}

// For AI Pitch Deck Generator
export interface FeatureHighlightCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: 'deep-blue' | 'off-white' | 'mustard';
}

// For AI Events & Networking
export interface EventCardProps {
    title: string;
    date: string;
    location: string;
    description: string;
    category: string;
    isFeatured?: boolean;
}

export interface CompanyCarouselCardProps {
    logo: React.ReactNode;
    name: string;
    description: string;
    flag: React.ReactNode;
}

// For Perks & Benefits
export interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: 'deep-blue' | 'off-white';
}

export interface PerkProps {
    logo: React.ReactNode;
    title: string;
    description: string;
    value?: string;
    category: string;
}

export interface TestimonialProps {
    quote: string;
    name: string;
    role: string;
    logo: React.ReactNode;
    image: string;
}

// For Jobs & Opportunities
export interface JobCardProps {
    title: string;
    company: string;
    logo: React.ReactNode;
    location: string;
    summary: string;
    tags: string[];
    isFeatured?: boolean;
    isHot?: boolean;
}

export interface CandidateBenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// For Education & Workshops
export interface TrainingTrackCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: 'deep-blue' | 'off-white';
}

export interface SpeakerProps {
    photo: string;
    name: string;
    title: string;
    organization: string;
    topic: string;
    date: string;
}

export interface ModuleProps {
    thumbnail: string;
    title: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Founders Track';
}