'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-white mb-4">⚡ FLOW</h1>
          <p className="text-2xl text-white/90">AI Automation Platform for HVAC Contractors</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-red-100 text-red-800 px-6 py-3 rounded-full font-bold mb-6">
              🔒 CONFIDENTIAL - NDA REQUIRED
            </div>
            <h2 className="text-3xl font-black mb-4">Interactive Demo Access</h2>
            <p className="text-gray-600 text-lg">
              You're about to see proprietary technology currently in stealth mode.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="font-bold text-xl mb-4">By accessing this demo, you agree to:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Keep all information confidential for 5 years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Not build or assist in building competing solutions for 2 years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Not disclose the "agentic flow" methodology to any third party</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Understand this technology is patent-pending</span>
              </li>
            </ul>
          </div>

          <div className="flex items-start gap-3 mb-8">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-blue-600 rounded"
            />
            <label htmlFor="agree" className="text-gray-700 font-semibold">
              I understand and agree to the confidentiality terms above. 
              I will not share, discuss, or replicate any technology shown in this demo.
            </label>
          </div>

          {agreed ? (
            <Link
              href="/demo"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all"
            >
              Enter Interactive Demo →
            </Link>
          ) : (
            <button
              disabled
              className="block w-full bg-gray-300 text-gray-500 text-center py-6 rounded-2xl font-bold text-xl cursor-not-allowed"
            >
              Check the box above to continue
            </button>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            Questions? Email: [your-email]@flowplatform.ca
          </p>
        </div>

        <div className="text-center mt-8 text-white/80 text-sm">
          <p>🛡️ Patent Pending • 🇨🇦 Made in Calgary, Alberta • 💰 Backed by Alberta Innovates</p>
        </div>
      </div>
    </div>
  );
}
