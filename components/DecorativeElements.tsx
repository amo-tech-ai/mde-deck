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
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5z"/><path d="M12 18v2"/><path d="M12 2v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l-1.42-1.42"/><path d="M19.78 4.22l-1.42 1.42"/><path d="M5.64 18.36l1.42-1.42"/><path d="M12 12a2 2 0 0 1 2 2a2 2 0 0 1-2-2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z"/></svg>
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

// AI Business Plan Generator Page
export const CompassIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
export const WorldIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 1.5 3 0 0 1 4-10z"/></svg>;
export const UsersIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
export const ImportIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
export const MoneyIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
export const MapIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
export const ExportIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;

// AI Events & Networking Page
export const CalendarIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
export const LocationPinIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
export const FlagUS: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 15"><path fill="#0A3161" d="M0 0h24v15H0z"/><path fill="#fff" d="M0 0h24v8H0z"/><path fill="#B31942" d="M0 0h24v1H0zm0 2h24v1H0zm0 2h24v1H0zm0 2h24v1H0zM0 8h24v1H0zm0 2h24v1H0zm0 2h24v1H0z"/><path fill="#0A3161" d="M0 0h12v7H0z"/><path fill="#fff" d="m6 3.5 1 .1-.8.7.2 1.2-1-.6-1 .6.3-1.2-.7-.7 1.1-.1L6 .5l.5 1.2zM2 1.5l.5 1.2 1 .2-.8.6.3 1-1-.5-1 .5.3-1-.8-.6 1-.2L2 .5zm8 0l.5 1.2 1 .2-.8.6.3 1-1-.5-1 .5.3-1-.8-.6 1-.2L10 .5zM2 5.5l.5 1.2 1 .2-.8.6.3 1-1-.5-1 .5.3-1-.8-.6 1-.2L2 4.5zm8 0l.5 1.2 1 .2-.8.6.3 1-1-.5-1 .5.3-1-.8-.6 1-.2L10 4.5z"/></svg>;
export const FlagCZ: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 15"><path fill="#fff" d="M0 0h24v15H0z"/><path fill="#D7141A" d="M0 7.5h24v7.5H0z"/><path fill="#11457E" d="m0 0 12 7.5L0 15z"/></svg>;
export const FlagMK: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 15"><path fill="#D20000" d="M0 0h24v15H0z"/><path fill="#FFE600" d="M0 0h24v15H0z"/><path fill="#D20000" d="M12 7.5 L 0 0 H 24 L 12 7.5 M 12 7.5 L 24 15 H 0 L 12 7.5 M 12 0 V 15 M 0 7.5 H 24" stroke="#FFE600" strokeWidth="2.5" /></svg>;
export const FlagDE: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 15"><path fill="#000" d="M0 0h24v5H0z"/><path fill="#D00" d="M0 5h24v5H0z"/><path fill="#FFCE00" d="M0 10h24v5H0z"/></svg>;
export const FlagCO: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 15"><path fill="#FFCD00" d="M0 0h24v7.5H0z"/><path fill="#003893" d="M0 7.5h24v3.75H0z"/><path fill="#CE1126" d="M0 11.25h24v3.75H0z"/></svg>;
export const FlagJP: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 15"><path fill="#fff" d="M0 0h24v15H0z"/><circle fill="#BC002D" cx="12" cy="7.5" r="4.5"/></svg>;

// Perks & Benefits Page
export const CloudIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
export const LegalIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/><path d="M12 22V12"/><path d="M3.5 12H20.5"/></svg>;
export const BrowseIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
export const ClaimIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>;
export const AWSLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>AWS</Logo>;
export const GoogleLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>Google</Logo>;
export const MicrosoftLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>Microsoft</Logo>;
export const OpenAILogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>OpenAI</Logo>;
export const SupabaseLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>Supabase</Logo>;
export const NotionLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>Notion</Logo>;
export const ZapierLogo: React.FC<IconProps> = ({ className }) => <Logo className={className}>Zapier</Logo>;
export const CogniflowLogo: React.FC<IconProps> = ({ className }) => <div className={`font-bold ${className}`}>Cogniflow AI</div>;
export const LinkedAiLogo: React.FC<IconProps> = ({ className }) => <div className={`font-bold ${className}`}>LinkedAI</div>;
export const TesoroAiLogo: React.FC<IconProps> = ({ className }) => <div className={`font-bold ${className}`}>Tesoro AI</div>;


// Jobs & Opportunities Page
export const SetPreferencesIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM21 9H3M21 15H3M9 3v18M15 3v18"/></svg>;
export const AiMatchIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 17l5-5-5-5"/><path d="M13 17l5-5-5-5"/></svg>;
export const SkillDiscoveryIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;

// Education & Workshops
export const ClipboardIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>;
export const PlayIcon: React.FC<IconProps> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
