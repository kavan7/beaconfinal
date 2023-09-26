import React from 'react';
import articles from '../constants/Articles';
import "./article.css";
const Article = ({ article }) => {
  return (
    <div>
      <h2 className='title'>{article.title}</h2>
      
      
      <img src={article.image} className='article-image-page'>
      </img>
      <p className='author'>Author: {article.author}<p className='date'>Date: {article.date}</p></p>
      <p className='content'>{article.content}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;
