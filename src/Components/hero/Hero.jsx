import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      {/* Animated Background Wrapper */}
      <div className="hero-bg"></div>
      
      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <div className="hero-text">
          <h1>We Ensure Better Education for a Better World</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education.
          </p>
          <a href="#program" className="btn btn-hero">
            Explore more <img src={dark_arrow} alt="Arrow icon" />
          </a>
        </div>

        {/* Stats Counter Bar */}
        <div className="hero-stats">
          <div className="stat-card">
            <h3 className="stat-number">200+</h3>
            <p className="stat-label">Expert Courses</p>
          </div>
          <div className="stat-card delay-1">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Top Faculty</p>
          </div>
          <div className="stat-card delay-2">
            <h3 className="stat-number">10K+</h3>
            <p className="stat-label">Happy Alumni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;