import React from 'react';
import NavbarSection from './Components/NavbarSection';
import HeroSection from './Components/HeroSection';
import CoursesSection from './Components/CoursesSection';
import BannerSection from './Components/BannerSection'

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <BannerSection />
      <CoursesSection />
    </div>
  );
}

export default App;
