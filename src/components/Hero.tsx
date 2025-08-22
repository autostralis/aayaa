import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import AuthModal from './AuthModal';

const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  const handleStartCampaignClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Connecting Brands with
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"> Influence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            Bridge the gap between innovative brands and authentic creators. 
            Launch impactful campaigns that drive real results and build lasting partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={handleStartCampaignClick}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <span>Start Your Campaign</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Browse Influencers</span>
              <Play className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Targeted Matching</h3>
                  <p className="text-slate-600">AI-powered algorithm matches brands with perfect creators</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Real-time Analytics</h3>
                  <p className="text-slate-600">Track campaign performance with detailed insights</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure Platform</h3>
                  <p className="text-slate-600">Safe payments and contract management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Hero;
