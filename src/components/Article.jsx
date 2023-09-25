import React from 'react';
import articles from '../constants/Articles';
const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Date: {article.date}</p>
      <p>{article.preview}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;
