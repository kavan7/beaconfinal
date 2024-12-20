import React, { useState, useEffect } from "react";
import "./AllArticles.css";
import articles from "../constants/Articles";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { allMembers }from "../components/Members";
import BeaconSymbol from '../assets/images/beaconlogo.png';

const AllArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState(searchParams.get("q") || "");
  const [selectedMember, setSelectedMember] = useState(searchParams.get("member") || "");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  useEffect(() => {
    const params = {};
    if (searchKeyword) params.q = searchKeyword;
    if (selectedMember) params.member = selectedMember;
    setSearchParams(params);
  }, [searchKeyword, selectedMember, setSearchParams]);

  const filterArticles = () => {
    let filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    if (selectedMember) {
      filtered = filtered.filter((article) => article.author === selectedMember);
    }

    setFilteredArticles(filtered);
  };

  useEffect(() => {
    filterArticles();
  }, [searchKeyword, selectedMember]);

  useEffect(() => {
    if (!searchParams.get("q") && !searchParams.get("member")) {
      setSearchKeyword("");
      setSelectedMember("");
      setFilteredArticles(articles);
    }
  }, [searchParams]);

  return (
    <motion.section className="">
      <div className="filter-popup bg-white ml-[1100px] max-xs:w-[350px] max-xs:ml-[20px] max-xs:mt-[10px]">
        <h4>Filter by:</h4>
        <div className="text-input">
          <form onSubmit={(e) => e.preventDefault()}>
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
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          <option value="">All Members</option>
          {allMembers.map((member, index) => (
            <option value={member.name} key={index}>
              {member.name}
            </option>
          ))}
        </select>
      </div>

      <motion.div
        className={`${styles.padding} max-w-7xl article-card-container max-xs:w-[170px] max-xs:mt-[120px] z-0 height-700vh`}
      >
        <h3
          className={`${styles.sectionHeadText} mr-[-150px] ml-[-650px] text-[#020617]`}
        >
          Articles.
        </h3>

        <div className="all max-xs:w-[100px] ">
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <Link
                to={`/articles/${article.date}-${slugify(article.title)}`}
                className="link-no-underline"
                key={index}
              >
                <motion.div
                  className="article-list-container flex justify-between w-[780px] bg-white border-[1px] max-xs:ml-[150px] max-xs:w-[300px]"
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
                      {Array.isArray(article.content)
                        ? article.content.slice(0, 300).join(" ")
                        : (article.content || "").slice(0, 300)}
                    </div>
                  </div>
                  <div>
                    {article.image && (article.image.toString().substring(0,22) !== "/assets/beaconnamelogo"&&article.image.toString().substring(0,33) !== "/src/assets/images/beaconnamelogo") ? (
                      <img
                        src={article.image}
                        alt="image"
                        className="article-list-image"
                      />
                    ) : null}
                    {article.image && (article.image.toString().substring(0,22) === "/assets/beaconnamelogo"||article.image.toString().substring(0,33) === "/src/assets/images/beaconnamelogo") ? (
                      <img
                        src={BeaconSymbol}
                        alt="image"
                        className="article-list-image"
                      />
                    ) : null}
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AllArticles;
