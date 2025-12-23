
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Visual & Quote */}
        <div className="relative lg:sticky lg:top-32 space-y-12">
          <div className="aspect-[1/1] overflow-hidden bg-white shadow-2xl rounded-sm border border-gray-100">
             <img 
               src="https://static.wixstatic.com/media/11c59e_73c9616556b84db99a462156b05679e1~mv2.png/v1/crop/x_0,y_0,w_1500,h_1408/fill/w_544,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11c59e_73c9616556b84db99a462156b05679e1~mv2.png" 
               alt="Sephi Shapira" 
               className="w-full h-full object-cover object-center" 
             />
          </div>
          
          <div className="relative max-w-sm pl-8 border-l border-sequoia-green/30">
            <p className="font-serif italic text-2xl leading-relaxed text-beige-900/90">
              "Fundraising isn't about asking for money. It's about selling a vision of the future that is inevitable."
            </p>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="animate-fade-in flex flex-col">
          <div className="mb-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sequoia-green">Founder & Author</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-12 text-beige-900 leading-tight tracking-tight">
            Sephi Shapira
          </h1>
          
          <div className="prose prose-xl text-gray-600 font-serif leading-relaxed mb-16 max-w-none space-y-8">
            <p className="text-xl">
              Sephi Shapira is a 4x exited founder who has raised capital from top-tier VCs including SoftBank, and the author of the fundraising guide "Fundable: Why Some Entrepreneurs Get Funded, And Others Do Not!"
            </p>
            <p className="text-xl">
              After selling MassiveImpact to Gmobi, Interchan to Edimax, and licensing Escapex IP to Apple, Sephi turned his attention to helping the next generation of founders. Over his 20-year career, he has navigated the complexities of global expansion, strategic pivots, and high-stakes exits.
            </p>
            <p className="text-xl">
              Today, Fundable Academy distills decades of hard-won lessons into actionable frameworks. He has helped over 100 founders raise more than $1.2B in aggregate capital through the exact methods detailed in his book and programs.
            </p>
          </div>

          <div className="w-full h-px bg-gray-200 mb-16"></div>

          {/* Metrics Section */}
          <div className="grid grid-cols-2 gap-y-20 gap-x-12">
            <div>
              <h4 className="text-6xl font-serif text-sequoia-green mb-4">$1.2B+</h4>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-gray-400">Coached Capital</p>
            </div>
             <div>
              <h4 className="text-6xl font-serif text-sequoia-green mb-4">$100M+</h4>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-gray-400">Personally Raised</p>
            </div>
             <div>
              <h4 className="text-6xl font-serif text-sequoia-green mb-4">200+</h4>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-gray-400">Venture Deals</p>
            </div>
             <div>
              <h4 className="text-6xl font-serif text-sequoia-green mb-4">100+</h4>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-gray-400">Founders Mentored</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
