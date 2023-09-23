import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import '../index.css';
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';
import "./Landing.css";

const Landing = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Hi, welcome.");
  const [index, setIndex] = useState(0);

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    if (index < fullText.length) {  
      setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 65);
    }
  }, [index, fullText]);
  const mostRecentArticle = articles[0];

  return (
    <section className="relative w-full h-[480px] sm:h-[650px] ">

      <h1 className=""></h1>
      <h2>Most Recent Article</h2>
      {mostRecentArticle && (
      <div className="article-container">
        <h3 className="article-title">{mostRecentArticle.title}</h3>
        <p className="article-author">Author: {mostRecentArticle.author}</p>
        <div className="article-content">
          <ReactMarkdown className="article-description">{mostRecentArticle.content}</ReactMarkdown>
        </div>
      </div>
)}

      
      
      <div className="absolute xs:bottom-2 xs:top-39 bottom-32 w-full flex justify-center ">

        </div>

    </section>
    
  )
}

export default Landing;