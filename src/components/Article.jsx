import React from 'react';
import articles from '../constants/Articles';
import "./article.css";
const Article = ({ article }) => {
  return (
    <div>
      <h2 className='title'>{article.title}</h2>
      <p className='author'>Author: {article.author}</p>
      <p className='date'>Date: {article.date}</p>
      <img src={article.image} className='article-image-page'>
      </img>
      <p className='content'>{article.content}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;
