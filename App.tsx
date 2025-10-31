import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import Introduction from './pages/Introduction';
import Challenge from './pages/Challenge';
import MarketOpportunity from './pages/MarketOpportunity';
import BusinessModel from './pages/BusinessModel';
import Traction from './pages/Traction';
import ValueProposition from './pages/ValueProposition';
import HowItWorks from './pages/HowItWorks';
import AiPitchDeckGenerator from './pages/AiPitchDeckGenerator';
import AiBusinessPlanGenerator from './pages/AiBusinessPlanGenerator';
import AiEventsAndNetworking from './pages/AiEventsAndNetworking';
import PerksAndBenefits from './pages/PerksAndBenefits';
import JobsAndOpportunities from './pages/JobsAndOpportunities';

export type Page = 
  | 'Introduction'
  | 'The Challenge'
  | 'Market Opportunity'
  | 'Business Model'
  | 'Traction'
  | 'Value Proposition'
  | 'How It Works'
  | 'AI Pitch Deck Generator'
  | 'AI Business Plan Generator'
  | 'AI Events & Networking'
  | 'Perks & Benefits'
  | 'Jobs & Opportunities';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('Jobs & Opportunities');

    const renderPage = () => {
        switch (activePage) {
            case 'Introduction':
                return <Introduction />;
            case 'The Challenge':
                return <Challenge />;
            case 'Market Opportunity':
                return <MarketOpportunity />;
            case 'Business Model':
                return <BusinessModel />;
            case 'Traction':
                return <Traction />;
            case 'Value Proposition':
                return <ValueProposition />;
            case 'How It Works':
                return <HowItWorks />;
            case 'AI Pitch Deck Generator':
                return <AiPitchDeckGenerator />;
            case 'AI Business Plan Generator':
                return <AiBusinessPlanGenerator />;
            case 'AI Events & Networking':
                return <AiEventsAndNetworking />;
            case 'Perks & Benefits':
                return <PerksAndBenefits />;
            case 'Jobs & Opportunities':
                return <JobsAndOpportunities />;
            default:
                return <Introduction />;
        }
    };

    return (
        <div className="flex min-h-screen">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex-1 pl-48">
                {renderPage()}
            </div>
        </div>
    );
};

export default App;