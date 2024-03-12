import React, { useState, useEffect } from "react";
import "./AllArticles.css";
import articles from "../constants/Articles";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { filter } from "../assets/images/special/index";
import members from "../constants/Members";

const AllArticles = () => {
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedMember, setSelectedMember] = useState(""); // State for selected member
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(true); // State for filter popup
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const filterArticles = () => {
    let filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    if (selectedMember) {
      filtered = filtered.filter((article) => article.author === selectedMember);
    }

    // You can add more filters for article date here if needed

    setFilteredArticles(filtered);
  };

  const debouncedFilterArticles = debounce(filterArticles, 300);

  useEffect(() => {
    debouncedFilterArticles();
  }, [searchKeyword, debouncedFilterArticles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterArticles();
  };



  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  return (
    <motion.div
      className={`${styles.padding} max-w-7xl article-card-container z-0 height-700vh`}
    >
      <h3 className={`${styles.sectionHeadText} mr-[-150px] ml-[-650px] text-[#020617]`}>Articles.</h3>
      

      {isFilterPopupOpen && (
        <div className="filter-popup">
          <h4>Filter by:</h4> 
          <div className="text-input">
          
        <form onSubmit={handleSubmit}>
          <input
            className="filter-box"
            type="text"
            placeholder="Search articles..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </form>
        
      </div>
          
          <select
  name="memberFilter"
  id="memberFilter"
  value={selectedMember}
  onChange={handleMemberChange}
>
  <option value="">All Members</option>
  {members.map((member, index) => (
    <option value={member.name} key={index}>
      {member.name}
    </option>
  ))}
  
</select>


          {/* You can add more filter options for article date here */}
        </div>
      )}

      <div className="all">
        <AnimatePresence>
          {filteredArticles.map((article, index) => (
            <Link
              to={`/articles/${article.date}-${slugify(article.title)}`}
              className="link-no-underline"
              key={index}
            >
              <motion.div
                className="article-list-container"
                id={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="article-list-title">{article.title}</h3>
                  <h5 className="article-list-author">{article.author}</h5>
                  <h5 className="article-list-date">{article.date}</h5>
                  <div className="article-list-content">
  {Array.isArray(article.content) ? article.content.slice(0, 300).join(' ') : (article.content || '').slice(0, 300)}
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