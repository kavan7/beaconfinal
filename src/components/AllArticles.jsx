import React, { useState, useEffect } from "react";
import "./AllArticles.css";
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
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
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredArticles(filtered);
    };

    filterArticles();
  }, [searchKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call filterArticles to update the filteredArticles state
    filterArticles();
  };

  return (
    <motion.div
      variants={staggerContainer()}
      staggerContainer
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto article-card-container z-0`}
    >
      <div className="text-input">
        <h1 className="article-header">Articles</h1>
        <form onSubmit={handleSubmit}>
          <input className="filter-box"
            type="text"
            placeholder="Search articles..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </form>
      </div>
      <div className="all">
        <AnimatePresence>
          {filteredArticles.map((article, index) => (
            <Link to={`/articles/${article.date}-${slugify(article.title)}`} className="link" key={index}>
              <motion.div
                className="article-list-container shadow-card"
                id={article.title}
                initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
                animate={{ opacity: 1, y: 0 }} // Animation when entering
                exit={{ opacity: 0, y: -20 }} // Animation when exiting
                transition={{ duration: 0.3 }} // Animation duration
              >
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
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AllArticles;
