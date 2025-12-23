
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Book', path: 'https://www.fundablebook.com', isExternal: true },
    { name: 'About', path: '/about' },
    { name: 'Masterclass', path: '/masterclass' },
    { name: 'Bootcamp', path: '/bootcamp' },
    { name: 'Coaching', path: '/coaching' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-beige-50 text-beige-900 selection:bg-sequoia-green selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-beige-50/95 backdrop-blur-sm border-gray-200 py-4' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-baseline hover:opacity-70 transition-opacity">
            <span className="text-xl font-bold tracking-[0.1em] uppercase">FUNDABLE</span>
            <span className="font-serif italic font-normal text-2xl lowercase ml-1.5">academy</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a 
                    key={link.path} 
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-sequoia-green transition-colors text-gray-500 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink size={10} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              }
              return (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase hover:text-sequoia-green transition-colors ${
                    location.pathname === link.path ? 'text-sequoia-green' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-beige-50 pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
             {navLinks.map((link) => {
               if (link.isExternal) {
                 return (
                  <a 
                    key={link.path} 
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-serif hover:text-sequoia-green transition-colors border-b border-gray-200 pb-4 flex justify-between items-center"
                  >
                    {link.name}
                    <ExternalLink size={18} className="text-gray-300" />
                  </a>
                 );
               }
               return (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif hover:text-sequoia-green transition-colors border-b border-gray-200 pb-4"
                >
                  {link.name}
                </Link>
               );
            })}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-beige-50 border-t border-gray-200 py-24 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-baseline mb-8">
                <span className="text-lg font-bold tracking-[0.1em] uppercase">FUNDABLE</span>
                <span className="font-serif italic font-normal text-xl lowercase ml-1">academy</span>
              </Link>
              <p className="text-gray-600 max-w-sm mb-8 leading-relaxed">
                We help the visionary build fundable startups. Leveraging $1.2B+ in raised capital experience to guide the next generation of founders.
              </p>
              <div className="flex space-x-6">
                 <a href="https://www.crunchbase.com/person/sephi-shapira" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-sequoia-green">Crunchbase</a>
                 <a href="https://www.linkedin.com/in/sephi-shapira-2b306127b/" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-sequoia-green">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">Programs</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/masterclass" className="hover:text-sequoia-green">The Masterclass</Link></li>
                <li><Link to="/bootcamp" className="hover:text-sequoia-green">The Bootcamp</Link></li>
                <li><Link to="/coaching" className="hover:text-sequoia-green">Executive Coaching</Link></li>
              </ul>
            </div>

            <div>
               <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">Resources</h4>
               <ul className="space-y-4 text-sm font-medium">
                <li><a href="https://www.fundablebook.com" target="_blank" rel="noreferrer" className="hover:text-sequoia-green">Fundable Book</a></li>
                <li><a href="https://app.warmintro.net/sephi" target="_blank" rel="noreferrer" className="hover:text-sequoia-green">WarmIntro Network</a></li>
                <li><a href="https://wintro.net" target="_blank" rel="noreferrer" className="hover:text-sequoia-green">Warmintro Playbook</a></li>
                <li><a href="https://thefundablefounder.org" target="_blank" rel="noreferrer" className="hover:text-sequoia-green">Free Guide</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fundable Academy. All rights reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link to="/privacy" className="hover:text-beige-900">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-beige-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
