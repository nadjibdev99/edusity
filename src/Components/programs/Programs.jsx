import React, { useEffect, useRef } from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = containerRef.current.querySelectorAll('.program-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="programs" id="program" ref={containerRef}>
      
      <div className="program-card scroll-reveal delay-1">
        <div className="program-img-wrapper">
          <img src={program_1} alt="Graduation Program" className="program-img" />
          <div className="program-overlay"></div>
        </div>
        <div className="program-caption">
          <div className="icon-wrapper">
            <img src={program_icon_1} alt="" />
          </div>
          <div className="caption-text">
            <h3>Graduation Program</h3>
            <p>4-Year Comprehensive Degree</p>
          </div>
        </div>
      </div>

      <div className="program-card scroll-reveal delay-2">
        <div className="program-img-wrapper">
          <img src={program_2} alt="Master Program" className="program-img" />
          <div className="program-overlay"></div>
        </div>
        <div className="program-caption">
          <div className="icon-wrapper">
            <img src={program_icon_2} alt="" />
          </div>
          <div className="caption-text">
            <h3>Master Program</h3>
            <p>2-Year Advanced Studies</p>
          </div>
        </div>
      </div>

      <div className="program-card scroll-reveal delay-3">
        <div className="program-img-wrapper">
          <img src={program_3} alt="Post Graduation" className="program-img" />
          <div className="program-overlay"></div>
        </div>
        <div className="program-caption">
          <div className="icon-wrapper">
            <img src={program_icon_3} alt="" />
          </div>
          <div className="caption-text">
            <h3>Post Graduation</h3>
            <p>Research & PhD Tracks</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Programs;