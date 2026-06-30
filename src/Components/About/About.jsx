import React, { useEffect, useRef } from 'react';
import './About.css';
import about_img from '../../assets/about.png';

const About = ({ setPlayState }) => {
  const aboutRef = useRef(null);

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

    const elements = aboutRef.current.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about" id="about" ref={aboutRef}>
      
      <div className="about-left scroll-reveal delay-1">
        <div className="about-img-wrapper">
          <img src={about_img} alt="University Students" className="about-img" />
          <div className="play-button" onClick={() => setPlayState(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="about-right">
        <h3 className="scroll-reveal delay-2">ABOUT UNIVERSITY</h3>
        <h2 className="scroll-reveal delay-3">Nurturing Tomorrow's Leaders Today</h2>
        <p className="scroll-reveal delay-4">
          Embark on a transformative educational journey with our university's comprehensive
          education programs. Our cutting-edge curriculum is designed to empower students with
          the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <p className="scroll-reveal delay-5">
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs
          prepare aspiring educators to make a meaningful impact in classrooms, schools, and
          communities.
        </p>
        <p className="scroll-reveal delay-5">
          Whether you aspire to become a teacher, administrator, counselor, or educational leader,
          our diverse range of programs offers the perfect pathway to achieve your goals and unlock
          your full potential in shaping the future of education.
        </p>
      </div>

    </div>
  );
};

export default About;