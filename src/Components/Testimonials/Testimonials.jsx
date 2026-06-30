import React, { useRef, useState } from 'react';
import './Testimonials.css';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  
  // Total slides = 4. Desktop shows 2 per row. Max translation is -50%.
  // Mobile shows 1 per row. Max translation is -75%.
  // We'll manage simple index state to update dots. 

  const slideForward = () => {
    // Assuming desktop layout for dot logic (3 positions: 0, 1, 2)
    if (slideIndex < 2) {
      const newIndex = slideIndex + 1;
      setSlideIndex(newIndex);
      slider.current.style.transform = `translateX(-${newIndex * 25}%)`;
    }
  };

  const slideBackward = () => {
    if (slideIndex > 0) {
      const newIndex = slideIndex - 1;
      setSlideIndex(newIndex);
      slider.current.style.transform = `translateX(-${newIndex * 25}%)`;
    }
  };

  const setSlide = (index) => {
    setSlideIndex(index);
    slider.current.style.transform = `translateX(-${index * 25}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      
      {/* Navigation Arrows */}
      <div className={`nav-btn back-btn ${slideIndex === 0 ? 'disabled' : ''}`} onClick={slideBackward}>
        <div className="arrow-left"></div>
      </div>
      <div className={`nav-btn next-btn ${slideIndex === 2 ? 'disabled' : ''}`} onClick={slideForward}>
        <div className="arrow-right"></div>
      </div>

      <div className="slider">
        <ul ref={slider}>
          
          <li>
            <div className="slide-card">
              <div className="user-info">
                <div className="avatar-wrapper">
                  <img src={user_1} alt="Emily Johnson" />
                </div>
                <div>
                  <h3>Emily Johnson</h3>
                  <span>Computer Science Graduate</span>
                </div>
              </div>
              <div className="star-rating">★★★★★</div>
              <p>
                The faculty at Edusity are truly world-class. Their mentorship helped me land my dream job at a top tech company before graduation. The hands-on projects and collaborative environment made learning incredibly engaging.
              </p>
            </div>
          </li>

          <li>
            <div className="slide-card">
              <div className="user-info">
                <div className="avatar-wrapper">
                  <img src={user_2} alt="Marcus Chen" />
                </div>
                <div>
                  <h3>Marcus Chen</h3>
                  <span>MBA Graduate</span>
                </div>
              </div>
              <div className="star-rating">★★★★★</div>
              <p>
                Edusity transformed my career trajectory. The business program combines rigorous academics with real-world case studies. I built connections that opened doors I never thought possible.
              </p>
            </div>
          </li>

          <li>
            <div className="slide-card">
              <div className="user-info">
                <div className="avatar-wrapper">
                  <img src={user_3} alt="Sarah Williams" />
                </div>
                <div>
                  <h3>Sarah Williams</h3>
                  <span>Education Studies</span>
                </div>
              </div>
              <div className="star-rating">★★★★★</div>
              <p>
                What sets Edusity apart is the genuine care the professors show. Every class felt like a conversation, not a lecture. The campus community became my second family during my four years here.
              </p>
            </div>
          </li>

          <li>
            <div className="slide-card">
              <div className="user-info">
                <div className="avatar-wrapper">
                  <img src={user_4} alt="James Rodriguez" />
                </div>
                <div>
                  <h3>James Rodriguez</h3>
                  <span>Engineering Alumni</span>
                </div>
              </div>
              <div className="star-rating">★★★★★</div>
              <p>
                The research opportunities at Edusity are unmatched. I co-authored two published papers as an undergraduate. The state-of-the-art labs and supportive faculty made groundbreaking work possible.
              </p>
            </div>
          </li>

        </ul>
      </div>

      {/* Dot Indicators */}
      <div className="slider-dots">
        <span className={`dot ${slideIndex === 0 ? 'active' : ''}`} onClick={() => setSlide(0)}></span>
        <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} onClick={() => setSlide(1)}></span>
        <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} onClick={() => setSlide(2)}></span>
      </div>

    </div>
  );
};

export default Testimonials;