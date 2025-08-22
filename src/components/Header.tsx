import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         <div className="flex items-center">
  <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-600 hover:text-blue-500 transition-colors">Home</a>
            <a href="#influencers" className="text-slate-600 hover:text-blue-500 transition-colors">Influencers</a>
            <a href="#brands" className="text-slate-600 hover:text-blue-500 transition-colors">For Brands</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-500 transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-500 transition-colors">Contact</a>
            <button 
              onClick={handleLoginClick}
              className="text-slate-600 hover:text-blue-500 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={handleRegisterClick}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Register Now
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-600 hover:text-blue-500 transition-colors">Home</a>
              <a href="#influencers" className="text-slate-600 hover:text-blue-500 transition-colors">Influencers</a>
              <a href="#brands" className="text-slate-600 hover:text-blue-500 transition-colors">For Brands</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-500 transition-colors">Pricing</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-500 transition-colors">Contact</a>
              <button 
                onClick={handleLoginClick}
                className="text-slate-600 hover:text-blue-500 transition-colors w-fit"
              >
                Sign In
              </button>
              <button 
                onClick={handleRegisterClick}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-fit"
              >
                Register Now
              </button>
            </nav>
          </div>
        )}
      </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;
