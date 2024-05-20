import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarSection = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">LOGO</Link>
        {/* 
        <ul>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/curriculum">Curriculum</Link></li>
          <li><Link to="/refund">Refund</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/login" className="btn">Login</Link></li>
          <li><Link to="/signup" className="btn">Signup</Link></li>
        </ul> */}
        welcome
      </div>
    </nav>
  );
};

export default NavbarSection;
