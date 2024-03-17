import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import articles from './constants/Articles';
import Article from './components/Article';
import './index.css'
import { About, AllArticles, Beardle, Contact, Landing, Members, Navbar } from './components';

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove consecutive hyphens
}


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0  h-[fit-content]">
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/about" element={<About />} />
            <Route path="/beardle" element={<Beardle />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contact" element={<Contact />} />
          
            {articles.map((article, index) => (
   <Route
   key={index}
   path={`/articles/${article.date}-${slugify(article.title)}`}
   element={<Article article={article} />}
 />
 
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
