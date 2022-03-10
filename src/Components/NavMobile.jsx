import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

const NavMobile = (setTopicFilter) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div id="mobile-nav-bar">
      <div className="mobile-bar" id="mobile-bar-left"></div>
      <div className="mobile-bar flex-bar-center"></div>
      <div className="mobile-bar" id="mobile-bar-right">
        <div className="dropdown">
          <button className="dropbtn">
            Topic
            <div className="mobile-bar flex-bar-center"></div>
            <i className="arrow down"></i>
          </button>
          <div id="myDropdown" className="dropdown-content">
            <Link to={`/articles`}>All</Link>
            {topics.map((topic) => {
              return (
                <TopicCard
                  key={topic.slug}
                  topic={topic}
                  setTopicFilter={setTopicFilter}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
