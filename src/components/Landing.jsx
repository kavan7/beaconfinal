import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import '../index.css';
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';


const Landing = () => {
  
  const mostRecentArticle = articles[0];

  return (
    <section className="relative w-full h-[480px] sm:h-[650px] article-card-container rounded-xl  ">

      
     
      {mostRecentArticle && (
      <div className="article-container ">
        <h3 className="article-title">{mostRecentArticle.title}</h3>
        <p className="article-author">Author: {mostRecentArticle.author}</p>
        <div className="article-content">
          <ReactMarkdown className="article-description">{mostRecentArticle.preview}</ReactMarkdown>
        </div>
      </div>


)}
    
      

      

    </section>
    
  )
}

export default Landing;