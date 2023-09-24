import React, { useState, useEffect } from "react";
import "./AllArticles.css"
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';


const AllArticles = () => {

    return (
        <div className="all">
          {articles.map((article, index) => (
            <div key={index} className="article-list-container shadow-card">
              <div>
                <h3 className="article-list-title">{article.title}</h3>
                <p className="article-list-author">{article.author}</p>
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
          ))}
        </div>
      );
    
    
    
}
export default AllArticles;
