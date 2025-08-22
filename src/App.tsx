import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Categories from './components/Categories';
import FeaturedCreators from './components/FeaturedCreators';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Categories />
      <FeaturedCreators />
      <WhyChoose />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
