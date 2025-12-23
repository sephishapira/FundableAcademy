
import React, { useState } from 'react';

const Coaching: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    target: '',
    revenue: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Executive Coaching Application: ${formData.website}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company Website: ${formData.website}\n` +
      `Raise Target: ${formData.target}\n` +
      `Current Revenue (ARR): ${formData.revenue}\n\n` +
      `Description:\n${formData.description}`
    );
    
    const mailtoLink = `mailto:sephi.shapira@gmail.com?subject=${subject}&body=${body}`;
    
    // Trigger the email client
    window.location.href = mailtoLink;
    
    // Show success state
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Split - Visual */}
      <div className="w-full md:w-1/2 bg-[#0B2E26] text-white p-12 md:p-24 flex flex-col justify-between">
        <div>
          <span className="text-sequoia-green font-bold tracking-widest uppercase text-xs mb-6 block">Elite Tier</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Executive <br/> Fundraising Coaching</h1>
          <p className="text-lg text-gray-300 font-light max-w-md">
            For founders ready to raise $3M+. Work directly with Sephi Shapira to orchestrate your round.
          </p>
        </div>
        
        <div className="mt-12 md:mt-0">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-gray-500"></div>
            <span className="text-xs uppercase tracking-widest text-gray-400">Requirements</span>
          </div>
          <ul className="space-y-4 text-sm font-medium text-gray-200">
            <li>• Generating revenue or significant traction</li>
            <li>• Seeking $3M ~ $100M+</li>
            <li>• Full-time commitment</li>
          </ul>
        </div>
      </div>

      {/* Right Split - Form */}
      <div className="w-full md:w-1/2 bg-white p-12 md:p-24 overflow-y-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-serif mb-2">Apply Now</h2>
              <p className="text-gray-500 text-sm">Applications are reviewed weekly. Limited spots available.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input 
                  required 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-sequoia-green transition-colors bg-transparent placeholder-gray-300" 
                  placeholder="Jane Doe" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-sequoia-green transition-colors bg-transparent placeholder-gray-300" 
                  placeholder="jane@company.com" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Company Website</label>
                <input 
                  required 
                  type="text" 
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-sequoia-green transition-colors bg-transparent placeholder-gray-300" 
                  placeholder="www.company.com" 
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Raise Target</label>
                  <input 
                    required 
                    type="text" 
                    name="target"
                    value={formData.target}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-sequoia-green transition-colors bg-transparent placeholder-gray-300" 
                    placeholder="$2M" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Current Revenue (ARR)</label>
                  <input 
                    required 
                    type="text" 
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-sequoia-green transition-colors bg-transparent placeholder-gray-300" 
                    placeholder="$500k" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Brief Description</label>
                <textarea 
                  required 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-sequoia-green transition-colors bg-transparent placeholder-gray-300 resize-none" 
                  placeholder="What does your company do?"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
              Submit Application
            </button>
          </form>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-sequoia-green text-2xl">✓</span>
            </div>
            <h3 className="text-3xl font-serif mb-4">Application Sent</h3>
            <p className="text-gray-500 max-w-xs mx-auto">
              Your email client should have opened with the application details. Please ensure you clicked "Send" in your mail app. Sephi and the team will reach out within 48 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              Back to form
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coaching;
