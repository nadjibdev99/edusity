import React, { useEffect, useRef } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const campusRef = useRef(null);

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

    const elements = campusRef.current.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="campus" id="campus" ref={campusRef}>
      <div className="gallery">
        <div className="gallery-item scroll-reveal delay-1">
          <img src={gallery_1} alt="Campus view 1" />
          <div className="gallery-overlay">
            <div className="view-icon"></div>
          </div>
        </div>
        <div className="gallery-item scroll-reveal delay-2">
          <img src={gallery_2} alt="Campus view 2" />
          <div className="gallery-overlay">
            <div className="view-icon"></div>
          </div>
        </div>
        <div className="gallery-item scroll-reveal delay-3">
          <img src={gallery_3} alt="Campus view 3" />
          <div className="gallery-overlay">
            <div className="view-icon"></div>
          </div>
        </div>
        <div className="gallery-item scroll-reveal delay-4">
          <img src={gallery_4} alt="Campus view 4" />
          <div className="gallery-overlay">
            <div className="view-icon"></div>
          </div>
        </div>
      </div>
      
      <div className="text-center scroll-reveal delay-5">
        <button className="btn dark-btn campus-btn">
          See more here
          <img src={white_arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Campus;