import React from 'react';
import './HeroSection.css';
import SchoolIcon from '@mui/icons-material/School';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const HeroSection = () => {
  return (
    <div className='hero'>
        <section className="about-section">
              <h2><SchoolIcon style={{ fontSize: '20px', verticalAlign: 'middle' }} /> An <strong> IIT Delhi </strong> Alumni Initiative</h2>
        </section>

        <section className="hero-section">
            <div className="container">
                <h1>Become an Expert in the field of <strong> Data Science with 6 courses </strong> </h1>
                <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
                <div className='hero-section-div1' >
                    <span><FlareOutlinedIcon style={{ fontSize: '20px', verticalAlign: 'middle' }} /> Personal Mentorship</span>
                    <span><FlareOutlinedIcon style={{ fontSize: '20px', verticalAlign: 'middle' }} /> Internship Assistance</span>
                    <span><FlareOutlinedIcon style={{ fontSize: '20px', verticalAlign: 'middle' }} /> Industry Certified Courses</span>
                </div>
                <div className="hero-buttons">
                    <button className="signupbtn">Enroll Now < SendOutlinedIcon style={{ fontSize: '20px', verticalAlign: 'top' ,marginLeft:'7px' ,rotate:'320deg' }}  /></button>
                    <button className="loginbtn">Know More <HelpOutlineOutlinedIcon style={{ fontSize: '20px', verticalAlign: 'middle' }}  /></button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default HeroSection;
