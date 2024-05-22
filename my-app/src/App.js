import React from 'react';
import NavbarSection from './Components/NavbarSection';
import HeroSection from './Components/HeroSection';
import CoursesSection from './Components/CoursesSection';
import BannerSection from './Components/BannerSection'
import OfferSection from './Components/OfferSection';

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <BannerSection />
      <CoursesSection />
      <OfferSection />
    </div>
  );
}

export default App;
