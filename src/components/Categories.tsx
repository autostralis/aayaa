import React from 'react';
import { Crown, Star, Rocket, TrendingUp, Sparkles } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Crown,
      title: 'Elite',
      followers: '1M+ Followers',
      description: 'Top-tier influencers with massive reach and premium brand partnerships',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Star,
      title: 'Premium',
      followers: '500K - 1M Followers',
      description: 'Established creators with strong engagement and proven track records',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Rocket,
      title: 'Rising Icons',
      followers: '100K - 500K Followers',
      description: 'Fast-growing influencers with authentic audiences and high engagement',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'Growth Champions',
      followers: '50K - 100K Followers',
      description: 'Emerging talents with dedicated communities and strong growth potential',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Sparkles,
      title: 'Emerging Voices',
      followers: '10K - 50K Followers',
      description: 'Fresh perspectives with highly engaged micro-communities',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Influencer Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find the perfect creators for your brand across all follower ranges and engagement levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {category.title}
              </h3>
              
              <div className="text-lg font-semibold text-blue-600 mb-4">
                {category.followers}
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
