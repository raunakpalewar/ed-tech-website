import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Become an Expert in the field of Data Science with 6 courses</h1>
        <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
        <div className="buttons">
          <button className="btn">Enroll Now</button>
          <button className="btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
