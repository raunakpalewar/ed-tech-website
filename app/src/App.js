import React from 'react';
import NavbarSection from './Components/NavbarSection';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import CoursesSection from './Components/CoursesSection';
import './styles.css';

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
    </div>
  );
}

export default App;
