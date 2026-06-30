import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobile = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <nav className={`navbar container ${sticky ? 'scrolled' : ''}`}>
        <img src={logo} alt="Edusity Logo" className="logo" />
        <ul className={`nav-links ${mobileMenu ? 'active' : ''}`}>
          <li style={{ '--i': 1 }}>
            <Link to="hero" spy={true} activeClass="active-link" smooth={true} offset={0} duration={400} onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li style={{ '--i': 2 }}>
            <Link to="program" spy={true} activeClass="active-link" smooth={true} offset={-100} duration={400} onClick={closeMobile}>
              Programs
            </Link>
          </li>
          <li style={{ '--i': 3 }}>
            <Link to="about" spy={true} activeClass="active-link" smooth={true} offset={-100} duration={400} onClick={closeMobile}>
              About Us
            </Link>
          </li>
          <li style={{ '--i': 4 }}>
            <Link to="campus" spy={true} activeClass="active-link" smooth={true} offset={-100} duration={400} onClick={closeMobile}>
              Campus
            </Link>
          </li>
          <li style={{ '--i': 5 }}>
            <Link to="testimonials" spy={true} activeClass="active-link" smooth={true} offset={-100} duration={400} onClick={closeMobile}>
              Testimonials
            </Link>
          </li>
          <li style={{ '--i': 6 }}>
            <Link className="btn contact-btn" to="contact" spy={true} smooth={true} offset={-100} duration={400} onClick={closeMobile}>
              Contact us
            </Link>
          </li>
        </ul>
        
        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${mobileMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div className={`mobile-overlay ${mobileMenu ? 'active' : ''}`} onClick={closeMobile}></div>
    </>
  );
};

export default Navbar;
