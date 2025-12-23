
import React from 'react';
import { Lock, Sparkles, Video, Mic, Hammer, Zap, GraduationCap, Cpu } from 'lucide-react';

const curriculum = [
  {
    part: "Part I - Preparation",
    modules: [
      "Category Leadership",
      "Conversational Pitch",
      "Innovation Stack",
      "Prepare Documents"
    ]
  },
  {
    part: "Part II - Communication",
    modules: [
      "Clarity & Energy",
      "Lead With Traction",
      "Pitch Without Slides",
      "Don't Share in Bulk"
    ]
  },
  {
    part: "Part III – Mindset",
    modules: [
      "Control The Process",
      "Foster Urgency",
      "Never Hard Sell",
      "Meet Decision Makers",
      "Don't Send Slides",
      "Don't Overshare"
    ]
  },
  {
    part: "Part IV - Execution",
    modules: [
      "Don't Filter Meetings",
      "Identify Decisions",
      "Communication Tools",
      "Funding Funnel"
    ]
  }
];

const Masterclass: React.FC = () => {
  let moduleCounter = 1;

  return (
    <div className="animate-fade-in bg-beige-50">
      {/* Header */}
      <div className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sequoia-green font-bold tracking-widest uppercase text-xs mb-4 block">The Starter Tier</span>
          <h1 className="text-5xl md:text-7xl font-serif text-beige-900 mb-6 leading-[1.1]">The Fundable Method Masterclass</h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            The only fundraising method with 90% funding success for those who master the method.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
           
           {/* New Summary Content Section */}
           <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-sm">
             <div className="max-w-3xl">
               <h2 className="text-[11px] font-bold tracking-[0.3em] uppercase text-sequoia-green mb-4">The Playbook</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-beige-900 mb-6 leading-tight">
                 Struggling to Close Investors? <br/>
                 <span className="text-gray-400">Fundable Will Change That.</span>
               </h3>
               <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                Raising funds is tough, but you don’t have to do it alone. The Fundable Method is a battle-tested system packed with powerful, original strategies that turn investor hesitation into <span className="text-beige-900 font-medium">YES</span>.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div className="flex items-start">
                   <div className="w-10 h-10 rounded-full bg-sequoia-green/5 flex items-center justify-center mr-4 flex-shrink-0">
                     <GraduationCap size={20} className="text-sequoia-green" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Expert Mentoring</h4>
                     <p className="text-sm text-gray-500 font-light">Direct lessons and a personal mentoring session from Sephi Shapira.</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-10 h-10 rounded-full bg-sequoia-green/5 flex items-center justify-center mr-4 flex-shrink-0">
                     <Hammer size={18} className="text-sequoia-green" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider mb-2">20+ Exclusive original tools</h4>
                     <p className="text-sm text-gray-500 font-light">Proprietary battle-tested templates, worksheets, and strategic checklists.</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-10 h-10 rounded-full bg-sequoia-green/5 flex items-center justify-center mr-4 flex-shrink-0">
                     <Video size={18} className="text-sequoia-green" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Multimodal Review</h4>
                     <p className="text-sm text-gray-500 font-light">Audio and Video summaries for rapid review and reinforcement.</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-10 h-10 rounded-full bg-sequoia-green/5 flex items-center justify-center mr-4 flex-shrink-0">
                     <Zap size={20} className="text-sequoia-green" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Interactive Quizzes</h4>
                     <p className="text-sm text-gray-500 font-light">Deepen your learning through tactical knowledge checks.</p>
                   </div>
                 </div>
               </div>

               {/* Fundable AI Highlight */}
               <div className="bg-[#0B2E26] text-white p-8 rounded-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                   <Cpu size={120} />
                 </div>
                 <div className="relative z-10">
                   <div className="flex items-center space-x-2 mb-4">
                     <Sparkles size={16} className="text-sequoia-green" />
                     <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-sequoia-green">AI Powered Advantage</span>
                   </div>
                   <h4 className="text-2xl font-serif mb-3">Fundable AI</h4>
                   <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md">
                     Get real-time, AI-powered feedback on how well your pitch aligns with the method. Transform your deck using our proprietary intelligence engine.
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* Stats Summary Bar */}
           <div className="flex flex-wrap gap-8 md:gap-16 border-y border-gray-200 py-10">
             <div>
               <p className="text-3xl font-serif text-beige-900">18</p>
               <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Modules</p>
             </div>
             <div>
               <p className="text-3xl font-serif text-beige-900">100</p>
               <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Expert Lessons</p>
             </div>
             <div>
               <p className="text-3xl font-serif text-beige-900">20+</p>
               <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Exclusive Tools</p>
             </div>
             <div>
               <p className="text-3xl font-serif text-sequoia-green">90%</p>
               <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1 leading-tight max-w-[140px]">
                 Funding Success for those who master the method
               </p>
             </div>
           </div>

           <div className="space-y-12">
             <h2 className="text-4xl font-serif text-beige-900">Full Curriculum</h2>
             
             {curriculum.map((section, sectionIdx) => (
               <div key={sectionIdx} className="space-y-6">
                 <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 border-b border-gray-100 pb-4">
                   {section.part}
                 </h3>
                 <div className="space-y-4">
                   {section.modules.map((mod, modIdx) => {
                     const currentNumber = moduleCounter++;
                     return (
                       <div 
                         key={modIdx} 
                         className="flex items-center p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                       >
                         <div className="w-10 h-10 rounded-full bg-beige-100 flex items-center justify-center text-xs font-bold mr-6 group-hover:bg-beige-200 transition-colors">
                           {currentNumber}
                         </div>
                         <span className="font-serif text-xl text-beige-900">Module {currentNumber}: {mod}</span>
                         <div className="ml-auto text-gray-200 group-hover:text-gray-300 transition-colors">
                           <Lock size={20} />
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Sidebar Checkout */}
        <div className="relative">
          <div className="sticky top-32 p-10 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
             <div className="flex items-start justify-center mb-1">
                <span className="text-3xl font-serif text-beige-900 opacity-60 mt-1 mr-0.5">$</span>
                <span className="text-7xl font-serif text-beige-900 font-medium tracking-tight">1,000</span>
             </div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
               ONE-TIME PAYMENT • LIFETIME ACCESS
             </p>
             
             <a 
               href="https://www.fundablemasterclass.com"
               target="_blank"
               rel="noopener noreferrer"
               className="block w-full py-6 bg-sequoia-green text-white font-bold uppercase tracking-[0.2em] text-[13px] hover:bg-[#007A5B] transition-all duration-300 shadow-xl shadow-sequoia-green/10 mb-12 rounded-sm"
             >
               GET THE METHOD
             </a>

             <ul className="space-y-6 mb-12 w-full text-left">
               {[
                 "100+ Video Lessons",
                 "18 modules by Sephi Shapira",
                 "1x One-on-One Session",
                 "20 original fundraising tools",
                 "AI to review pitches",
                 "Quizzes to ensure comprehension"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-[15px] text-gray-600 font-medium">
                   <div className="mr-4 w-6 h-6 rounded-full bg-sequoia-green/10 flex items-center justify-center flex-shrink-0">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-sequoia-green">
                       <polyline points="20 6 9 17 4 12"></polyline>
                     </svg>
                   </div>
                   {item}
                 </li>
               ))}
             </ul>

             <div className="w-full h-px bg-gray-100 mb-8"></div>
             
             <div className="text-center">
               <p className="text-[10px] font-bold tracking-[0.1em] text-gray-300 uppercase">secure checkout Via Card or PayPal</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masterclass;
