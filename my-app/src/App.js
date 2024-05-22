import React from 'react';
import NavbarSection from './Components/NavbarSection';
import HeroSection from './Components/HeroSection';
import CoursesSection from './Components/CoursesSection';
import BannerSection from './Components/BannerSection'
import OfferSection from './Components/OfferSection';
import CompanySection from './Components/Companies';
import CertificateSection from './Components/CertificateSection';
// import InterhshipSection from './Components/InternshipSection';


function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <BannerSection />
      <CoursesSection />
      <OfferSection />
      <CompanySection />
      <CertificateSection />
      {/* <InterhshipSection /> */}
    </div>
  );
}

export default App;
