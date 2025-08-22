import React from 'react';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import AuthModal from './AuthModal';

const Packages = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  const handleGetStartedClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const packages = [
    {
      name: 'Starter',
      price: '$500 - $2K',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 3 micro-influencers',
        'Basic analytics dashboard',
        'Email support',
        '1 campaign per month',
        'Standard content rights'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Growth',
      price: '$2K - $5K',
      description: 'Ideal for growing brands',
      features: [
        'Up to 8 influencers',
        'Advanced analytics',
        'Priority support',
        '3 campaigns per month',
        'Extended content rights',
        'Campaign optimization'
      ],
      popular: false,
      color: 'border-blue-200'
    },
    {
      name: 'Premium',
      price: '$5K - $15K',
      description: 'For established businesses',
      features: [
        'Up to 15 influencers',
        'Premium analytics suite',
        'Dedicated account manager',
        'Unlimited campaigns',
        'Full content rights',
        'A/B testing',
        'Custom reporting'
      ],
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'Elite',
      price: '$15K - $50K',
      description: 'For large enterprises',
      features: [
        'Up to 30 premium influencers',
        'Enterprise analytics',
        'White-glove service',
        'Unlimited campaigns',
        'Exclusive content rights',
        'Advanced targeting',
        'Custom integrations',
        'Brand safety tools'
      ],
      popular: false,
      color: 'border-purple-200'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited influencers',
        'Custom analytics platform',
        'Dedicated team',
        'Global campaign management',
        'Full IP ownership',
        'API access',
        'Custom workflows',
        'SLA guarantees'
      ],
      popular: false,
      color: 'border-gray-800'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Flexible pricing options to match your campaign goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 border-2 ${pkg.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${pkg.popular ? 'scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {pkg.price}
                </div>
                <p className="text-slate-600">
                  {pkg.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                pkg.popular 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-500'
              }`}
              onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </section>
  );
};

export default Packages;
