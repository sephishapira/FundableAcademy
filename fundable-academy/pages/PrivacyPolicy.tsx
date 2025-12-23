
import React from 'react';

const EmailGraphic = () => (
  <span className="inline-flex items-center ml-1">
    <svg width="180" height="18" viewBox="0 0 180 18" className="pointer-events-none select-none text-sequoia-green">
      <text x="0" y="14" fill="currentColor" style={{ font: 'italic 15px serif' }}>Shapira.sephi@gmail.com</text>
    </svg>
  </span>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-beige-50 min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif text-beige-900 mb-12">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-600 font-light space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">Introduction</h2>
            <p>
              At Fundable Academy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or enroll in our programs. This policy is governed by the laws of Delaware, USA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">Information We Collect</h2>
            <p>
              We collect personal information that you provide to us directly, such as your name, email address, company details, and payment information when you register for a course or apply for coaching. We also collect technical data like your IP address and browsing behavior through cookies to improve your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">How We Use Your Information</h2>
            <p>
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage your access to our courses and tools.</li>
              <li>Process payments through secure third-party providers (Card/PayPal).</li>
              <li>Communicate with you regarding your progress, updates, and marketing (with your consent).</li>
              <li>Analyze platform usage to improve our educational content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. Your payment data is handled exclusively by PCI-compliant processors. We do not sell or rent your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You may also unsubscribe from marketing communications at any time by clicking the link in our emails or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-beige-900 mb-4">Contact Us</h2>
            <div className="flex items-center">
              <span>If you have any questions about this Privacy Policy, please contact Sephi Shapira at:</span>
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

export default PrivacyPolicy;
