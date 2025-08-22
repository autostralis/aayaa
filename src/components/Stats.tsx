import React from 'react';
import { Users, Building, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '10K+',
      label: 'Verified Influencers',
      description: 'Authentic creators across all niches'
    },
    {
      icon: Building,
      number: '5K+',
      label: 'Brand Partners',
      description: 'Trusted companies worldwide'
    },
    {
      icon: TrendingUp,
      number: '340%',
      label: 'Average ROI',
      description: 'Proven campaign performance'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of brands and creators who've achieved remarkable results through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                <stat.icon className="w-10 h-10 text-blue-400" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-blue-400 mb-2">
                {stat.label}
              </div>
              <p className="text-slate-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
