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
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
  }
  
  const mostRecentArticle = articles[0];

  return (
<>
<motion.section
  
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        staggerContainer
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto article-card-container z-0`}>

      <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[40px] sm:top-[100px]  `}>
      <Link to={`/articles/${mostRecentArticle.date}-${slugify(mostRecentArticle.title)}`} className="link">
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
</Link>

<div className="mini-container">
<Link to={`/articles/${articles[1].date}-${slugify(articles[1].title)}`} className="link">
{articles[1] && (
        
        <div className="mini-article-container shadow-card ">
          <img src={articles[1].image} alt="image" className="mini-article-image"/>
          <h3 className="article-title" id="mini">{articles[1].title}</h3>
          <p className="article-author"id="mini">{articles[1].author}</p>
          <h5 className="article-date"id="mini">{articles[1].date}</h5>
          <div className="article-content"id="mini">
            <ReactMarkdown className="article-description"id="mini">{articles[1].preview}</ReactMarkdown>
            
          </div>
  
        </div>
  
  
  )}
  </Link>
  <Link to={`/articles/${articles[2].date}-${slugify(articles[2].title)}`} className="link">
  {articles[2] && (
        
        <div className="mini-article-container shadow-card ">
          <img src={articles[2].image} alt="image" className="mini-article-image"/>
          <h3 className="article-title"id="mini">{articles[2].title}</h3>
          <p className="article-author"id="mini">{articles[2].author}</p>
          <h5 className="article-date"id="mini">{articles[2].date}</h5>
          <div className="article-content"id="mini">
            <ReactMarkdown className="article-description"id="mini">{articles[2].preview}</ReactMarkdown>
            
          </div>
  
        </div>
  
  
  )}
</Link>
<Link to={`/articles/${articles[3].date}-${slugify(articles[3].title)}`} className="link">
  {articles[3] && (
        
        <div className="mini-article-container shadow-card ">
          <img src={articles[3].image} alt="image" className="mini-article-image"/>
          <h3 className="article-title"id="mini">{articles[3].title}</h3>
          <p className="article-author"id="mini">{articles[3].author}</p>
          <h5 className="article-date"id="mini">{articles[3].date}</h5>
          <div className="article-content"id="mini">
            <ReactMarkdown className="article-description"id="mini">{articles[3].preview}</ReactMarkdown>
            
          </div>
  
        </div>
  
  
  )}
  </Link>
  </div>
  
    
  <Link to="./articles" className='allstories' id="all-link ">
            AllArticles
            </Link>

      
    </motion.div>

    <Link to={`/articles/${articles[3].date}-${slugify(articles[3].title)}`} className="link">
  {articles[3] && (
        <div className="allstories" >
        <div className="mini-article-container shadow-card ">
         
          <h3 className="article-title"id="mini">{articles[3].title}</h3>
          <p className="article-author"id="mini">{articles[3].author}</p>
          <h5 className="article-date"id="mini">{articles[3].date}</h5>
          <div className="article-content"id="mini">
            <ReactMarkdown className="article-description"id="mini">{articles[3].preview}</ReactMarkdown>
            
          </div>
  
        </div>
        </div>
  
  
  )}
  </Link>
    </motion.section>
 
    </>
  )
}
export default Landing;