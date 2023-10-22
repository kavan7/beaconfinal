import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { textVariant } from "../utils/motion";
import articles from "../constants/Articles";
import ReactMarkdown from 'react-markdown';
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Card } from "flowbite-react";
import GoogleCalendarEmbed from "./GoogleCalendarEmbed";
import featured from '../constants/featured';

const Landing = () => {
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
  }

  const mostRecentArticle = articles[0];

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        staggerContainer
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} article-card-container`}
      >
        <motion.div variants={textVariant()}>
          <Link to={`/articles/${mostRecentArticle.date}-${slugify(mostRecentArticle.title)}`} className="link">
            {mostRecentArticle && (
              <div className="article-container shadow-card">
                <div>
                  <h3 className="article-title">{mostRecentArticle.title}</h3>
                  <h5 className="article-author">{mostRecentArticle.author}</h5>
                  <h5 className="article-date">{mostRecentArticle.date}</h5>
                  <div className="article-content">
                    <ReactMarkdown className="article-description">{mostRecentArticle.preview}</ReactMarkdown>
                  </div>
                </div>
                <div>
                  <img src={mostRecentArticle.image} alt="image" className="article-image" />
                </div>
              </div>
            )}
          </Link>
          <div className="mini-container">
            <motion.div variants={textVariant()}>
              <Link to={`/articles/${articles[1].date}-${slugify(articles[1].title)}`} className="link">
                {articles[1] && (
                  <div className="mini-article-container shadow-card ">
                    <img src={articles[1].image} alt="image" className="mini-article-image" />
                    <h3 className="article-title" id="mini">{articles[1].title}</h3>
                    <h5 className="article-author" id="mini">{articles[1].author}</h5>
                    <h5 className="article-date" id="mini">{articles[1].date}</h5>
                    <div className="article-content" id="mini">
                      <ReactMarkdown className="article-description" id="mini">{articles[1].preview}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
            <motion.div variants={textVariant()}>
              <Link to={`/articles/${articles[2].date}-${slugify(articles[2].title)}`} className="link">
                {articles[2] && (
                  <div className="mini-article-container shadow-card ">
                    <img src={articles[2].image} alt="image" className="mini-article-image" />
                    <h3 className="article-title" id="mini">{articles[2].title}</h3>
                    <h5 className="article-author" id="mini">{articles[2].author}</h5>
                    <h5 className="article-date" id="mini">{articles[2].date}</h5>
                    <div className="article-content" id="mini">
                      <ReactMarkdown className="article-description" id="mini">{articles[2].preview}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
            <motion.div variants={textVariant()}>
              <Link to={`/articles/${articles[3].date}-${slugify(articles[3].title)}`} className="link">
                {articles[3] && (
                  <div className="mini-article-container shadow-card ">
                    <img src={articles[3].image} alt="image" className="mini-article-image" />
                    <h3 className="article-title" id="mini">{articles[3].title}</h3>
                    <h5 className="article-author" id="mini">{articles[3].author}</h5>
                    <h5 className="article-date" id="mini">{articles[3].date}</h5>
                    <div className="article-content" id="mini">
                      <ReactMarkdown className="article-description" id="mini">{articles[3].preview}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          </div>
        </motion.div>

       

        <motion.div>
          <Card className="more-stories mr-[12px]">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">More stories</h5>
              <Link to="./articles" className='allstories rounded-2xl' id="all-link ">View all</Link>
            </div>
            <div className="flow-root divide-y w-[1000px] ml-[0px]">
              <ul className="divide-y divide-gray-700 dark:divide-gray-700">
                <li>
                  <div></div>
                </li>
                <div className="line" />
                {articles[4] && (
                  <Link to={`/articles/${articles[4].date}-${slugify(articles[4].title)}`} className="link">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {articles[4].author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className=" font-medium" id="mini">{articles[4].title}</h3>
                        </div>
                        <h5 className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {articles[4].date}
                        </h5>
                        <div className="inline-flex items-center text-base w-[50px] text-gray-900 dark:text-white">
                          🔗
                        </div>
                      </div>
                    </li>
                    <div className="line" />
                  </Link>
                )}
                {articles[5] && (
                  <Link to={`/articles/${articles[5].date}-${slugify(articles[5].title)}`} className="link">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {articles[5].author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className=" font-medium" id="mini">{articles[5].title}</h3>
                        </div>
                        <h5 className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {articles[5].date}
                        </h5>
                        <div className="inline-flex items-center text-base w-[50px] text-gray-900 dark:text-white">
                          🔗
                        </div>
                      </div>
                    </li>
                    <div className="line" />
                  </Link>
                )}
                {articles[6] && (
                  <Link to={`/articles/${articles[6].date}-${slugify(articles[6].title)}`} className="link">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {articles[6].author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className=" font-medium" id="mini">{articles[6].title}</h3>
                        </div>
                        <h5 className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {articles[6].date}
                        </h5>
                        <div className="inline-flex items-center text-base w-[50px] text-gray-900 dark:text-white">
                          🔗
                        </div>
                      </div>
                    </li>
                    <div className="line" />
                  </Link>
                )}
                {articles[7] && (
                  <Link to={`/articles/${articles[7].date}-${slugify(articles[7].title)}`} className="link">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {articles[7].author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className=" font-medium" id="mini">{articles[7].title}</h3>
                        </div>
                        <h5 className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {articles[7].date}
                        </h5>
                        <div className="inline-flex items-center text-base w-[50px] text-gray-900 dark:text-white">
                          🔗
                        </div>
                      </div>
                    </li>
                    <div className="line" />
                  </Link>
                )}
                {articles[8] && (
                  <Link to={`/articles/${articles[8].date}-${slugify(articles[8].title)}`} className="link">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {articles[8].author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className=" font-medium" id="mini">{articles[8].title}</h3>
                        </div>
                        <h5 className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {articles[8].date}
                        </h5>
                        <div className="inline-flex items-center text-base w-[50px] text-gray-900 dark:text-white">
                          🔗
                        </div>
                      </div>
                    </li>
                  </Link>
                )}
              </ul>
            </div>
            
          </Card>
          
        </motion.div>
      </motion.section>
      
      <Card className='features'>
        <h1 className='fhead'>Featured</h1>
          {featured.map((featured, index) => (
              <div>
                <Link to={`/articles/${featured.date}-${slugify(featured.title)}`} className="link">
                <ul className="divide-y divide-gray-700 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <h5 className="truncate text-sm font-normal text-gray-900 dark:text-white">
                            {featured.author} |
                          </h5>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className=" font-medium" id="mini">{featured.title}</h3>
                        </div>
                        
                      </div>
                    </li>
                    </ul>
                </Link>
              </div>
            ))}
            </Card>
    </>
  );
}

export default Landing;
