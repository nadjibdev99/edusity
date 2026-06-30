import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const contactRef = useRef(null);

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

    const elements = contactRef.current.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✅");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message || "Something went wrong ❌"}`);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setResult("Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="contact" ref={contactRef}>
      
      {/* Left Column - Info Card */}
      <div className="contact-col info-card scroll-reveal delay-1">
        <div className="info-bg-shape"></div>
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us.
        </p>
        <ul>
          <li>
            <div className="icon-circle">
              <img src={mail_icon} alt="Mail" />
            </div>
            knnadjib@gmail.com
          </li>
          <li>
            <div className="icon-circle">
              <img src={phone_icon} alt="Phone" />
            </div>
            +213 34567894567
          </li>
          <li>
            <div className="icon-circle">
              <img src={location_icon} alt="Location" />
            </div>
            77 Massachusetts Ave, Cambridge MA 02139
          </li>
        </ul>
      </div>

      {/* Right Column - Form */}
      <div className="contact-col form-wrapper scroll-reveal delay-2">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email address" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          </div>

          <div className="input-group">
            <label>Write your message here</label>
            <textarea name="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>

          <button type="submit" className="btn dark-btn submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit now"} <img src={white_arrow} alt="Arrow" />
          </button>
        </form>

        {/* Result Message */}
        {result && (
          <div className={`form-result ${result.includes('Error') ? 'error' : 'success'}`}>
            {result}
          </div>
        )}
      </div>

    </div>
  );
};

export default Contact;
