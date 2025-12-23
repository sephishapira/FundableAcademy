import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Mail, ArrowRight } from 'lucide-react';

const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Success: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get('product') || 'Program';

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="w-20 h-20 bg-sequoia-green rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-900/20">
         <CheckIcon />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-serif mb-6 text-beige-900">You're In.</h1>
      <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto mb-12">
        Welcome to <strong>{decodeURIComponent(product)}</strong>. A confirmation email with your access credentials has been sent to your inbox.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <div className="bg-white p-8 border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow">
          <Mail size={32} className="text-gray-400 mb-4" />
          <h3 className="font-bold mb-2">Check Email</h3>
          <p className="text-sm text-gray-500 mb-4">Credentials sent to your inbox.</p>
          <span className="text-xs font-bold uppercase text-sequoia-green">Open Gmail</span>
        </div>

        <div className="bg-white p-8 border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer">
          <Calendar size={32} className="text-gray-400 mb-4" />
          <h3 className="font-bold mb-2">Book Onboarding</h3>
          <p className="text-sm text-gray-500 mb-4">Schedule your kickoff call.</p>
          <span className="text-xs font-bold uppercase text-sequoia-green">View Calendar</span>
        </div>
      </div>
      
      <div className="mt-16">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 flex items-center justify-center">
          Return Home <ArrowRight size={12} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Success;