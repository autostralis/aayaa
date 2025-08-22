import React from 'react';
import { Instagram, Youtube, Heart, MessageCircle } from 'lucide-react';

const FeaturedCreators = () => {
  const creators = [
    {
      name: 'Priya Sharma',
      niche: 'Fashion & Lifestyle',
      followers: '850K',
      engagement: '4.2%',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Fashion', 'Beauty', 'Travel'],
      platforms: [Instagram, Youtube]
    },
    {
      name: 'Arjun Kapoor',
      niche: 'Tech & Gaming',
      followers: '1.2M',
      engagement: '5.8%',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Technology', 'Gaming', 'Reviews'],
      platforms: [Youtube, Instagram]
    },
    {
      name: 'Sneha Reddy',
      niche: 'Food & Cooking',
      followers: '650K',
      engagement: '6.1%',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Cooking', 'Recipes', 'Health'],
      platforms: [Instagram, Youtube]
    },
    {
      name: 'Rohan Joshi',
      niche: 'Fitness & Health',
      followers: '920K',
      engagement: '4.7%',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Fitness', 'Nutrition', 'Wellness'],
      platforms: [Instagram, Youtube]
    },
    {
      name: 'Ananya Rao',
      niche: 'Travel & Adventure',
      followers: '780K',
      engagement: '5.3%',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Travel', 'Adventure', 'Photography'],
      platforms: [Instagram, Youtube]
    },
    {
      name: 'Vikram Singh',
      niche: 'Business & Finance',
      followers: '540K',
      engagement: '3.9%',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Finance', 'Business', 'Investment'],
      platforms: [Youtube, Instagram]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Creators
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet some of our top-performing influencers who consistently deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative">
                <img 
                  src={creator.image} 
                  alt={creator.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {creator.platforms.map((Platform, idx) => (
                    <div key={idx} className="bg-white/90 p-2 rounded-full">
                      <Platform className="w-4 h-4 text-slate-600" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {creator.name}
                </h3>
                
                <p className="text-blue-600 font-semibold mb-4">
                  {creator.niche}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-slate-600">{creator.followers} followers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-slate-600">{creator.engagement} engagement</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {creator.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;
