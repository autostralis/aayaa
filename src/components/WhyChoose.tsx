import React from 'react';
import { Shield, Zap, Users, BarChart3, Clock, Award } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Influencers',
      description: 'All creators undergo thorough verification to ensure authenticity and quality',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Zap,
      title: 'AI Matching',
      description: 'Advanced algorithms match brands with the perfect creators for maximum impact',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Secure Collaboration',
      description: 'Protected workspace with contract management and secure payment processing',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and performance tracking for data-driven decisions',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Clock,
      title: 'Instant Booking',
      description: 'Quick and easy booking process with immediate confirmation and scheduling',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Dedicated support team ensures campaign quality and brand safety',
      color: 'bg-cyan-100 text-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose Spanzor?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide everything you need to run successful influencer marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100 rounded-2xl p-8">
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
