
import React from 'react';

const EmailGraphic = () => (
  <span className="inline-flex items-center ml-1">
    <svg width="180" height="18" viewBox="0 0 180 18" className="pointer-events-none select-none text-sequoia-green">
      <text x="0" y="14" fill="currentColor" style={{ font: 'italic 15px serif' }}>Shapira.sephi@gmail.com</text>
    </svg>
  </span>
);

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-beige-50 min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif text-beige-900 mb-12">Terms of Service</h1>
        
        <div className="prose prose-lg text-gray-600 font-light space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Fundable Academy, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">2. Intellectual Property</h2>
            <p>
              The materials contained in Fundable Academy, including videos, documents, templates, and the Fundable AI engine, are protected by applicable copyright and trademark law. You are granted a limited, personal, non-exclusive license to use the materials for your own founder education. You may not redistribute, resell, or publicly share any of the course content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">3. Program Access</h2>
            <p>
              <strong>Masterclass:</strong> Lifetime access refers to the life of the platform. Access is for a single user only.
              <br/><br/>
              <strong>Bootcamp:</strong> Requires active participation. Mentoring sessions must be used within the 6-week program duration unless otherwise agreed.
              <br/><br/>
              <strong>Coaching:</strong> Subject to specific engagement letters and availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">4. Refund Policy</h2>
            <p>
              Due to the digital nature of our educational content, all sales for The Masterclass are final once the content has been accessed. For Bootcamp and Coaching, refund terms are specified in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">5. Disclaimer</h2>
            <p>
              The materials on Fundable Academy are provided on an 'as is' basis. Fundable Academy makes no warranties, expressed or implied, regarding the success of your fundraising efforts. Raising capital involves significant risk and depends on market conditions and founder execution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Fundable Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fundable Academy's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Delaware, USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">8. Contact Information</h2>
            <div className="flex items-center">
              <span>For inquiries regarding these terms, please contact Sephi Shapira at:</span>
              <EmailGraphic />
            </div>
          </section>
        </div>

        <p className="mt-20 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Last Updated: February 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
