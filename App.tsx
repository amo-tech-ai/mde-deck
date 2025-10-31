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

export type Page = 
  | 'Introduction'
  | 'The Challenge'
  | 'Market Opportunity'
  | 'Business Model'
  | 'Traction'
  | 'Value Proposition'
  | 'How It Works'
  | 'AI Pitch Deck Generator';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('AI Pitch Deck Generator');

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