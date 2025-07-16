import React from 'react';
import HeroSection from './components/HeroSection';
import AppShowcase from './components/AppShowcase';
import SocialMediaSection from './components/SocialMediaSection';

function App() {
  return (
    <div className="font-inter">
      <HeroSection />
      <AppShowcase />
      <SocialMediaSection />
    </div>
  );
}

export default App;