import React from 'react';
import { Target, Users, Calendar, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: 'Choose Deliverable',
      description: 'Define your campaign goals, target audience, and desired content format',
      step: '01'
    },
    {
      icon: Users,
      title: 'Pick Creators',
      description: 'Browse and select from our verified influencers that match your brand',
      step: '02'
    },
    {
      icon: Calendar,
      title: 'Schedule & Brief',
      description: 'Set timelines, provide creative briefs, and finalize campaign details',
      step: '03'
    },
    {
      icon: Rocket,
      title: 'Launch & Track',
      description: 'Monitor campaign performance with real-time analytics and insights',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Launch your influencer marketing campaign in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300 hover:-translate-y-2 border border-slate-600/50">
                <div className="text-6xl font-bold text-blue-500/20 mb-4">
                  {step.step}
                </div>
                
                <div className="bg-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
