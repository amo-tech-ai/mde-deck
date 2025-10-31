import React from 'react';
import { motion } from 'framer-motion';
import FilterBar from '../components/FilterBar';
import EventListingCard from '../components/EventListingCard';
import FeaturedEventsCarousel from '../components/FeaturedEventsCarousel';
import TopicCard from '../components/TopicCard';
import ReplayCard from '../components/ReplayCard';

const AiEventsAndEducationListings: React.FC = () => {
    const mainStyle = {
        background: '#FBF6F1',
    };
    
    return (
        <div style={mainStyle}>
        <FilterBar />
        <main className="min-h-screen w-full p-4 lg:p-8 text-[#1E1E1E] overflow-hidden">
            <motion.div
                className="w-full max-w-7xl mx-auto flex flex-col space-y-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {/* Hero */}
                <section className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#00334F]">Learn, Connect, and Grow in the Global AI Community.</h1>
                    <p className="mt-4 text-lg text-[#6E6E6E] max-w-3xl mx-auto">
                       Explore live and virtual workshops, training sessions, and seminars with top AI experts and founders.
                    </p>
                     <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#00334F] text-white font-bold py-3 px-6 rounded-full">View Upcoming Events</button>
                        <button className="border-2 border-[#E97A41] text-[#E97A41] font-bold py-3 px-6 rounded-full">Host a Session</button>
                    </div>
                </section>
                
                {/* Event Grid */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EventListingCard />
                        <EventListingCard />
                        <EventListingCard />
                        <EventListingCard />
                        <EventListingCard />
                        <EventListingCard />
                    </div>
                </section>

                {/* Featured Carousel */}
                <section>
                    <FeaturedEventsCarousel />
                </section>

                {/* Topics */}
                <section>
                    <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">Explore Topics</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <TopicCard/>
                        <TopicCard/>
                        <TopicCard/>
                        <TopicCard/>
                        <TopicCard/>
                     </div>
                </section>

                {/* Past Highlights */}
                <section>
                    <h2 className="text-3xl font-bold text-[#00334F] text-center mb-8">Watch Past Sessions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <ReplayCard/>
                        <ReplayCard/>
                        <ReplayCard/>
                        <ReplayCard/>
                    </div>
                </section>

                 {/* CTA */}
                <section className="w-full bg-[#00334F] text-white p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold">Stay Ahead. Keep Learning.</h2>
                    <p className="mt-2 text-white/80 max-w-2xl mx-auto">Get early access to upcoming sessions, exclusive invitations, and member-only replays.</p>
                     <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="bg-[#E97A41] text-white font-bold py-3 px-6 rounded-full">Join the Community</button>
                        <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-full">Subscribe</button>
                    </div>
                </section>

            </motion.div>
        </main>
        </div>
    );
};

export default AiEventsAndEducationListings;
