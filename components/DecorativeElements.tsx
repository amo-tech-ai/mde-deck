import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// General Decorative Icons
export const FlowerIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
        <defs>
            <path id="petal" d="M12,2 C14.5,2 16.5,4 16.5,6.5 C16.5,9 14.5,11 12,11 C9.5,11 7.5,9 7.5,6.5 C7.5,4 9.5,2 12,2 Z" />
        </defs>
        <use href="#petal" transform="rotate(0 12 12)" />
        <use href="#petal" transform="rotate(45 12 12)" />
        <use href="#petal" transform="rotate(90 12 12)" />
        <use href="#petal" transform="rotate(135 12 12)" />
        <use href="#petal" transform="rotate(180 12 12)" />
        <use href="#petal" transform="rotate(225 12 12)" />
        <use href="#petal" transform="rotate(270 12 12)" />
        <use href="#petal" transform="rotate(315 12 12)" />
    </svg>
);

export const CircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 10 10" fill="currentColor" className={className}>
        <circle cx="5" cy="5" r="5" />
    </svg>
);

// Generic Icons
export const IdeaIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5z"/><path d="M12 18v2"/><path d="M12 2v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l-1.42-1.42"/><path d="M19.78 4.22l-1.42 1.42"/><path d="M5.64 18.36l1.42-1.42"/><path d="M12 12a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z"/></svg>
);
export const BrainIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a9 9 0 0 0-9-9 9 9 0 0 0-9 9h18z"/><path d="M12 2a9 9 0 0 0-9 9c0 4.42 2.87 8.17 6.84 9.49"/><path d="M12 2a9 9 0 0 1 9 9c0 4.42-2.87 8.17-6.84 9.49"/><path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
);
export const ChartIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20V16"/></svg>
);
export const NetworkIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M12 14v3"/><path d="M17.3 6.7l-3.6 3.6"/><path d="M6.7 17.3l3.6-3.6"/></svg>
);
export const RocketIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
export const ChatIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
export const AiIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="10" rx="2" ry="2" /><path d="M12 12v10" /><path d="M9 22h6" /></svg>
);
export const CommunityIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

// Challenge Page
export const DesignIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M12 4v16"/><path d="M4 12h8"/><path d="M4 4l8 8-8 8"/></svg>;
export const AccessIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg>;
export const TimeIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;

// Value Prop Page
export const PresentationIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h20v12H2z"/><path d="M12 15v6"/><path d="M8 21h8"/></svg>;
export const BarChartIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20V16"/></svg>;
export const UserGridIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;

// Traction Page
export const SCurveIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 95 C 25 95, 25 5, 50 5 S 75 95, 95 95"/></svg>;
const Logo: React.FC<IconProps & { children: React.ReactNode }> = ({ className, children }) => <div className={className}>{children}</div>;
export const RutaNLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>Ruta N</Logo>;
export const EAFITLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>EAFIT</Logo>;
export const C4IRLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>C4IR</Logo>;
export const ACILogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>ACI</Logo>;

// Business Model Page
export const GiftIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>;
export const TagIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
export const BulletIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>;

// Market Opp Page
export const TrophyIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 L12 6"/><path d="M12 22 L12 18"/><path d="M20 12 L16 12"/><path d="M4 12 L8 12"/><path d="M18 6 L16 8"/><path d="M6 18 L8 16"/><path d="M18 18 L16 16"/><path d="M6 6 L8 8"/><ellipse cx="12" cy="12" rx="8" ry="10"/></svg>;
export const GrowthIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18 L10 11 L14 15 L21 8"/><path d="M21 3 L21 9 L15 9"/></svg>;
export const ArrowUpIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19 L12 5"/><path d="M5 12 L12 5 L19 12"/></svg>;
export const CheckIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 L9 17 L4 12"/></svg>;
export const GradCapIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>;
export const CityIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 11L12 3l10 8v8H2z"/><path d="M8 21V11h8v10"/><path d="M10 15h4"/></svg>;
export const ShieldIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

// AI Pitch Deck Generator Page
export const LightningIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
export const PaletteIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.49"/><path d="M12 2a10 10 0 0 1 10 10c0-4.42-2.87-8.17-6.84-9.49"/></svg>;
export const PenIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-1.5M12 19l-4-4"/></svg>;
export const PuzzleIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 7h.01"/><path d="M10 7h.01"/><path d="M17 10h.01"/><path d="M7 10h.01"/><path d="M7 14h.01"/><path d="M17 14h.01"/><path d="M14 17h.01"/><path d="M10 17h.01"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>;
export const PencilIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
export const GearIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
export const FilmIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>;
export const GraphIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 20H4V4"/><path d="M4 16l6-6 4 4 6-6"/></svg>;