import React, { useEffect, useState } from 'react';
import articles from '../constants/Articles';
import "./article.css";
import ReactMarkdown from 'react-markdown';

const Article = ({ article }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch your Markdown content from a file using the article.content property
    fetch(`/src/components/${article.content}`) // Assuming article.content holds the file name
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, [article.content]);

  return (
    <div>
      <h2 className='title'>{article.title}</h2>
      
      <img src={article.image} className='article-image-page' alt="Article Image" />
      
      <p className='author'>Author: {article.author}</p>
      <p className='date'>Date: {article.date}</p>
      
      <div className='content'>
        <ReactMarkdown children={markdownContent} />
      </div>
    </div>
  );
};

export default Article;
