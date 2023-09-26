import React, { useState, useEffect } from "react";
import "./AllArticles.css"
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const AllArticles = () => {
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') 
      .replace(/\s+/g, '-') 
      .replace(/-+/g, '-'); 
  }
  
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    
    const filterArticles = () => {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredArticles(filtered);
    };

    filterArticles();
  }, [searchKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Call the filtering function here
    filterArticles();
  };

  
    return (
      <motion.div
  
        variants={staggerContainer()}
       
        staggerContainer
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto article-card-container z-0`}>
              <div>
                      <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
        <div className="all">
          {articles.map((article, index) => (
            <Link to={`/articles/${article.date}-${slugify(article.title)}`} className="link">
            <div key={index} className="article-list-container shadow-card">
              <div>
                <h3 className="article-list-title">{article.title}</h3>
                <h5 className="article-list-author">{article.author}</h5>
                <h5 className="article-list-date">{article.date}</h5>
                <div className="article-list-content">
                  {/* Assuming articles[i].preview is Markdown content */}
                  <ReactMarkdown className="article-list-description">{article.preview}</ReactMarkdown>
                </div>
              </div>
              <div>
                <img src={article.image} alt="image" className="article-list-image" />
              </div>
            </div>
            </Link>
          ))}
        </div>
        
        </motion.div>
      );
    
    
}
export default AllArticles;
