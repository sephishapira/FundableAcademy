
import React from 'react';
import { Check, Calendar, Users, Target, Shield } from 'lucide-react';

const Bootcamp: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-beige-900 text-beige-50 pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 border border-beige-50/30 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">Growth Tier</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8">The Bootcamp</h1>
          <p className="text-xl md:text-2xl font-light text-beige-200 max-w-2xl mx-auto leading-relaxed">
            A 6-week intensive program to refine your strategy, perfect your narrative, and build a Tier-1 VC grade pitch ready for the world's most demanding investors.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="md:col-span-2 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-serif mb-8 text-beige-900">What You'll Achieve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-2">
                <Target className="text-sequoia-green mb-2" />
                <h4 className="font-bold text-lg">Category Leadership</h4>
                <p className="text-sm text-gray-600">Define your market position and create a "Category of One" innovation stack.</p>
              </div>
              <div className="space-y-2">
                <Users className="text-sequoia-green mb-2" />
                <h4 className="font-bold text-lg">Conversational Pitch</h4>
                <p className="text-sm text-gray-600">Move beyond slides. Learn to control the room and the narrative dynamically.</p>
              </div>
              <div className="space-y-2">
                <Shield className="text-sequoia-green mb-2" />
                <h4 className="font-bold text-lg">Investor Defense</h4>
                <p className="text-sm text-gray-600">Prep for the hardest Q&A. We simulate the toughest VC questions.</p>
              </div>
              <div className="space-y-2">
                <Calendar className="text-sequoia-green mb-2" />
                <h4 className="font-bold text-lg">Strategic Roadmap</h4>
                <p className="text-sm text-gray-600">A concrete 6-12 month plan to hit the milestones investors demand.</p>
              </div>
            </div>

            <hr className="border-gray-100 my-16" />

            <h3 className="text-3xl font-serif mb-12 text-beige-900">The Schedule</h3>
            <div className="space-y-12 border-l border-gray-100 pl-10 ml-2 relative">
              {[
                { week: 1, title: "Category Leadership", desc: "Defining your unique market position and establishing authority." },
                { week: 2, title: "The Innovation Stack", desc: "Building the defensible core of your business." },
                { week: 3, title: "The Conversational Pitch", desc: "Controlling the room through dialogue rather than static slides." },
                { week: 4, title: "Investor Questions", desc: "Mastering the hardest Q&A sessions and handling complex objections." },
                { week: 5, title: "Documents", desc: "Finalizing the data room, financial model, and closing documents." },
                { week: 6, title: "Meeting Investors", desc: "Strategic outreach execution and managing the funnel to close." },
              ].map((item) => (
                <div key={item.week} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[48.5px] top-1.5 w-4 h-4 rounded-full bg-sequoia-green border-[3px] border-white"></div>
                  
                  <h4 className="font-bold text-lg text-beige-900">
                    Week {item.week}: {item.title}
                  </h4>
                  <p className="text-gray-500 mt-2 font-light text-base leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pricing/Action */}
          <div className="md:col-span-1">
             <div className="bg-[#FBF9F3] p-10 border border-gray-100 shadow-xl shadow-beige-200/50 sticky top-32">
                <div className="flex items-start mb-1">
                   <span className="text-3xl font-serif text-beige-900 opacity-60 mt-1 mr-0.5">$</span>
                   <span className="text-6xl font-serif text-beige-900 font-medium tracking-tight">10,000</span>
                </div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-gray-400 uppercase mb-10">LIMITED INTAKE / COHORT BASED</p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start group">
                    <Check size={18} className="text-sequoia-green mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-beige-900 font-medium leading-snug">Everything in Masterclass</span>
                  </div>
                  <div className="flex items-start group">
                    <Check size={18} className="text-sequoia-green mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-beige-900 font-bold leading-snug">6x Weekly 90 min 1:1 Sessions with Sephi</span>
                  </div>
                  <div className="flex items-start group">
                    <Check size={18} className="text-sequoia-green mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-beige-900 font-medium leading-snug">Unlimited direct chat Access to Sephi</span>
                  </div>
                  <div className="flex items-start group">
                    <Check size={18} className="text-sequoia-green mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-beige-900 font-medium leading-snug">WarmIntro VIP 12 month Access</span>
                  </div>
                </div>

                <a 
                  href="https://www.fundablecourse.com/challenge-page/8033b5be-8b98-4fed-a33f-fc9d3c66f3d2?programId=8033b5be-8b98-4fed-a33f-fc9d3c66f3d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-6 bg-[#1A1A1A] text-white text-center font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-black transition-all shadow-lg active:scale-[0.98] rounded-sm"
                >
                  Apply for Bootcamp
                </a>
                
                <div className="mt-8 pt-8 border-t border-gray-200/50 text-center">
                   <p className="text-[10px] font-bold tracking-[0.1em] text-gray-300 uppercase">secure checkout Via Card or PayPal</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
