
import React from 'react';
import Card from '../components/Card.tsx';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  { 
    quote: "Made my pitch impossible to ignore", 
    name: "Lee Rubin", 
    detail: "Raised $18.2M for Confetti", 
    linkedin: "https://www.linkedin.com/in/rubinl",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0C1D8v7ZaLVRB7TimXwsrKGjhsfxVlKj7fQ&s"
  },
  { 
    quote: "I've seen it work over and over again", 
    name: "Inbar Haham", 
    detail: "Raised $50M for INcapital.com", 
    linkedin: "https://www.linkedin.com/in/inbarh",
    img: "https://incapitalvc.com/wp-content/uploads/2020/03/inbar-haham.jpg"
  },
  { 
    quote: "showed me how to get a check", 
    name: "Ravid Israel", 
    detail: "Raised $2.8M for Embie Clinic", 
    linkedin: "https://il.linkedin.com/in/r-israel",
    img: "https://static-cdn.toi-media.com/www/uploads/2019/05/ravidyosef.png"
  },
  { 
    quote: "I raised thanks to this methodology", 
    name: "Ally Wolodarsky", 
    detail: "Raised $2M for klerk.com", 
    linkedin: "https://www.linkedin.com/in/allywolodarsky",
    img: "https://cdn.theorg.com/1b17c7ba-c6ce-4fdd-b0fa-78358b0b5b92_thumb.jpg"
  },
  { 
    quote: "I can't overstate its value", 
    name: "Na'ama Moran", 
    detail: "Raised $130M for GoCheetah", 
    linkedin: "https://www.linkedin.com/in/naamamoran",
    img: "https://hanacovc.com/wp-content/uploads/2025/11/Na_ama-Moran.webp"
  },
  { 
    quote: "It really set us up for success", 
    name: "Jennifer Tuft", 
    detail: "Raised $7M for Kaleidoco", 
    linkedin: "https://www.linkedin.com/in/jennifertuft",
    img: "https://iwillharness.com/wp-content/uploads/2024/02/Jennifer.png"
  },
  { 
    quote: "It completely changed my mindset", 
    name: "Max Interbrick", 
    detail: "Raised $2.5M for Sparrow.city", 
    linkedin: "https://www.linkedin.com/in/maximinterbrick",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkqbMmr21fvPABcVQIwNbvtN4RM5-_jQYWA&s"
  },
  { 
    quote: "I was lost", 
    name: "Guy Hochman", 
    detail: "Raised $1M for Reliestate.com", 
    linkedin: "https://www.linkedin.com/in/guy-hochman-74904417",
    img: "https://static.therealdeal.com/wp-content/uploads/2015/06/Guy-Hochman-thumb.jpg"
  },
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-visible">
        <div className="flex flex-col items-center">
          {/* Badge section removed per user request */}
          
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif text-center leading-[1.1] text-beige-900 mb-16 relative z-10 max-w-7xl mx-auto px-4">
            We 
            <span className="relative inline-block ml-3 px-4 pb-2">
              help the visionary
              <svg 
                className="absolute -top-[50%] -left-[5%] w-[110%] h-[200%] -z-10 text-sequoia-green pointer-events-none overflow-visible hidden md:block" 
                viewBox="0 0 1000 300" 
                fill="none"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M 40,225 Q 200,215 420,222 C 480,223 520,210 540,180 C 570,100 700,50 850,65 C 950,80 1000,180 950,240 C 900,290 700,290 600,250 C 500,210 520,110 650,85 C 780,60 950,90 970,170 C 990,240 880,295 720,285 C 600,275 580,180 620,110 C 660,60 850,70 920,150 C 960,210 880,290 700,285 C 600,280 580,220 560,295" className="opacity-90"/>
              </svg>
            </span>
            <br />
            build fundable startups.
          </h1>
          
          <p className="text-center text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-0">
            Leveraging $1.2B+ in raised capital experience to guide founders from idea to exit. <br/>
            Founded by Sephi Shapira (4x Exits, SoftBank backed).
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-serif">Our Programs</h2>
            <Link to="/about" className="hidden md:flex items-center text-xs font-bold tracking-widest uppercase hover:text-sequoia-green">
              View All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card tag="MASTERCLASS" title="The Fundable Method" subtitle="Starter Tier • $1,000" description="Get the whole system and method plus a coaching session with Sephi" href="/masterclass" theme="dark" actionLabel="START" />
            <Card tag="BOOTCAMP" title="6-Week Intensive" subtitle="Growth Tier • $10,000" description="Become the top 1% pitching in your sector. 10 hours personal coaching by sephi" href="/bootcamp" theme="gold" actionLabel="APPLY" />
            <Card tag="COACHING" title="Executive Coaching" subtitle="Elite Tier • Application Only" description="Coaching until the funding is closed. Partner with Sephi to close your round." href="/coaching" theme="blue" actionLabel="INQUIRE" />
          </div>
        </div>
      </section>

      {/* Proof Stats & Testimonials */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left border-b border-gray-100 pb-20">
            <div><h3 className="text-5xl font-serif text-sequoia-green mb-2">$1.2B+</h3><p className="text-xs font-bold tracking-widest uppercase text-gray-500">Coached Capital</p></div>
            <div><h3 className="text-5xl font-serif text-sequoia-green mb-2">$100M+</h3><p className="text-xs font-bold tracking-widest uppercase text-gray-500">Personally Raised</p></div>
            <div><h3 className="text-5xl font-serif text-sequoia-green mb-2">200+</h3><p className="text-xs font-bold tracking-widest uppercase text-gray-500">Venture Deals</p></div>
            <div><h3 className="text-5xl font-serif text-sequoia-green mb-2">100+</h3><p className="text-xs font-bold tracking-widest uppercase text-gray-500">Founders Mentored</p></div>
          </div>
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">Proof It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
              {testimonials.map((t, i) => (
                <div key={i} className="flex flex-col group">
                  <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}</div>
                  <p className="text-base font-serif italic text-gray-800 leading-relaxed mb-6">"{t.quote}"</p>
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-70 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden border border-gray-200">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-beige-900">{t.name}</p>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">{t.detail}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Softened Video Testimonials Link */}
            <div className="flex justify-center mt-8 pb-12">
               <a 
                 href="https://www.fundablemethod.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group flex items-center space-x-2 text-gray-400 hover:text-beige-900 transition-colors duration-300"
               >
                 <span className="text-[10px] tracking-[0.2em] uppercase">Watch Video Testimonials</span>
                 <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "Who is this for?", a: "Founders at Pre-Seed to Series A stages who need to structure their fundraise effectively." },
            { q: "What results can I expect?", a: "Become top 1% of founders pitching in your sector. 90% success in getting funded for those who master the method." },
            { q: "How is this different?", a: "This isn't theory. It's the exact playbook Sephi used to help over 100 founders raise over 1 billion dollars." },
            { q: "Is there a guarantee?", a: "We guarantee the quality of the methodology. Execution depends on you." },
          ].map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6">
              <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
              <p className="text-gray-600 font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-beige-900 text-beige-50 py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to build something legendary?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link to="/masterclass" className="px-8 py-4 bg-white text-beige-900 font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors w-full md:w-auto">Start Masterclass</Link>
          <Link to="/coaching" className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors w-full md:w-auto">Apply for Coaching</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
