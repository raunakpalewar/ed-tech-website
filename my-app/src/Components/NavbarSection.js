import React from 'react';
import './Navbar.css';



const NavbarSection = () => {
  return (
    <div className='NavSection'>
      <div className='TopBar'>
        <span>
          <h1>
            LOGO
          </h1>
        </span>
        <span className='authbtn'>
          <button className='loginbtn'>Login</button>
          <button className='signupbtn'>SignUp</button>
        </span>
      </div>

      <nav className="navbar">
        <div className="Navcontainer">
          
          <ul>
            <li className='active'>Overview</li>
            <li>Curriculum</li>
            <li>Refund</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSection;
