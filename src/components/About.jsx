// About.jsx

import React from 'react';
import './About.css'; // Import the associated CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="header-text">Welcome to The Beacon</h1>
      <p className="intro-text">
        Unveiling the stories that shape Martingrove CI and beyond, The Beacon
        is your portal to a world of knowledge, inspiration, and curiosity. We
        delve into diverse topics, from school happenings to global affairs,
        creating a vibrant tapestry of voices and perspectives.
      </p>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At The Beacon, our mission is to illuminate the path of information,
          empower our readers with insightful narratives, and spark meaningful
          conversations within the Martingrove CI community. We strive to be the
          guiding light that connects minds and fosters a sense of unity.
        </p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have a story to share or a suggestion? Reach out to us at{' '}
          <a href="mailto:contactmcibeacon@gmail.com">
            contactmcibeacon@gmail.com
          </a>
          . Your voice matters, and we're here to listen!
        </p>
      </div>
    </div>
  );
};

export default About;
