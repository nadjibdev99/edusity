import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace this with your Web3Forms access key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log("Web3Forms response:", data); // Useful for debugging

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
    <div className='contact'>
      {/* Left Column */}
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Mail" /> knnadjib@gmail.com</li>
          <li><img src={phone_icon} alt="Phone" /> +213 34567894567</li>
          <li>
            <img src={location_icon} alt="Location" />
            77 Massachusetts Ave, Cambridge MA 02139
          </li>
        </ul>
      </div>

      {/* Right Column - Form */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit now"} <img src={white_arrow} alt="Arrow" />
          </button>
        </form>

        {/* Result Message */}
        {result && <p className="form-result">{result}</p>}
      </div>
    </div>
  );
};

export default Contact;
