// About.jsx

import React from 'react';
import './About.css'; // Import the associated CSS file
import { motion } from 'framer-motion-3d';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const About = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    staggerContainer
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} article-card-container`}
  ><div className='stuff'>
    <motion.div variants={textVariant()} className='about-container'>
      
    
      <h1 className="header-text mb-5">Welcome to The Beacon</h1>
      <h5 className="intro-text text-slate-500">
        Unveiling the stories that shape Martingrove CI and beyond, The Beacon
        is your portal to a world of knowledge, inspiration, and curiosity. We
        delve into diverse topics, from school happenings to global affairs,
        creating a vibrant tapestry of voices and perspectives.
      </h5>
      <div className="mission-section">
        <h2 className='mb-3'>Our Mission</h2>
        <h5 className='text-slate-500'>
          At The Beacon, our mission is to illuminate the path of information,
          empower our readers with insightful narratives, and spark meaningful
          conversations within the Martingrove CI community. We strive to be the
          guiding light that connects minds and fosters a sense of unity.
        </h5>
      </div>
      <div className="contact-section">
        <h2 className='mb-5'>Contact Us</h2>
        <h5 className='text-slate-500'>
          Have a story to share or a suggestion? Reach out to us at{' '}
          <a href="mailto:contactmcibeacon@gmail.com">
            contactmcibeacon@gmail.com
          </a>
          . Your voice matters, and we're here to listen!
        </h5>
      </div>
    
    </motion.div>
    </div>
    </motion.section>
  );
};

export default About;
