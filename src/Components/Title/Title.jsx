import React, { useEffect, useRef } from 'react';
import './Title.css';

const Title = ({ subTitle, title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="title scroll-reveal" ref={titleRef}>
      <span className="subtitle-pill">{subTitle}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;