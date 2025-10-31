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