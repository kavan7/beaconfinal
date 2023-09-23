import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import '../index.css';
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const Landing = () => {
  
  const mostRecentArticle = articles[0];

  return (
<>
<motion.section
  
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        staggerContainer
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative article-card-container z-0`}>

      <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[40px] sm:top-[100px] max-w-7xl mx-0 flex flex-row items-start gap-3 sm:gap-10 `}>
      
      {mostRecentArticle && (
        
        <div className="article-container shadow-card">
          
          <div>
            <h3 className="article-title">{mostRecentArticle.title}</h3>
            <p className="article-author">{mostRecentArticle.author}</p>
            <h5 className="article-date">{mostRecentArticle.date}</h5>
            <div className="article-content">
              <ReactMarkdown className="article-description">{mostRecentArticle.preview}</ReactMarkdown>
              
            </div>
          </div>
          <div>
          <img src={mostRecentArticle.image} alt="image" className="article-image"/>
          </div>
      </div>


)}
<div className="mini-container">
{articles[1] && (
        
        <div className="mini-article-container shadow-card ">
          <img src={articles[1].image} alt="image" className="mini-article-image"/>
          <h3 className="article-title">{articles[1].title}</h3>
          <p className="article-author">{articles[1].author}</p>
          <h5 className="article-date">{articles[1].date}</h5>
          <div className="article-content">
            <ReactMarkdown className="article-description">{articles[1].preview}</ReactMarkdown>
            
          </div>
  
        </div>
  
  
  )}
  {articles[2] && (
        
        <div className="mini-article-container shadow-card ">
          <img src={articles[2].image} alt="image" className="mini-article-image"/>
          <h3 className="article-title">{articles[2].title}</h3>
          <p className="article-author">{articles[2].author}</p>
          <h5 className="article-date">{articles[2].date}</h5>
          <div className="article-content">
            <ReactMarkdown className="article-description">{articles[2].preview}</ReactMarkdown>
            
          </div>
  
        </div>
  
  
  )}
  {articles[3] && (
        
        <div className="mini-article-container shadow-card ">
          <img src={articles[3].image} alt="image" className="mini-article-image"/>
          <h3 className="article-title">{articles[3].title}</h3>
          <p className="article-author">{articles[3].author}</p>
          <h5 className="article-date">{articles[3].date}</h5>
          <div className="article-content">
            <ReactMarkdown className="article-description">{articles[3].preview}</ReactMarkdown>
            
          </div>
  
        </div>
  
  
  )}
  </div>
  
    
      

      
    </motion.div>
    </motion.section>
 
    </>
  )
}

export default Landing;