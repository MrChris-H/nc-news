import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

const NavMobile = ({ setOrder, order, topicBar, setSort, sort }) => {
  const [topics, setTopics] = useState([]);
  const sortSwitchBoard = {
    created_at: "Date",
    author: "Author",
    votes: "Rated",
    title: "Title",
    comment_count: "Comments",
  };
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
  const handleClickOrder = () => {
    if (order === "DESC") setOrder("ASC");
    else setOrder("DESC");
  };
  const handleClickSort = (sortBy) => {
    setSort(sortBy);
  };
  return (
    <div id="mobile-nav-bar">
      <div className="mobile-bar" id="mobile-bar-left"></div>
      <div className="dropdown">
        <button className="dropbtn sort">
          {sortSwitchBoard[sort]}
          <div className="mobile-bar flex-bar-center"></div>
          <i className="arrow down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content drop-content-sort">
          <div
            onClick={() => {
              handleClickSort("created_at");
            }}
          >
            Date
          </div>
          <div
            onClick={() => {
              handleClickSort("author");
            }}
          >
            Author
          </div>
          <div
            onClick={() => {
              handleClickSort("votes");
            }}
          >
            Rated
          </div>
          <div
            onClick={() => {
              handleClickSort("title");
            }}
          >
            Title
          </div>
          <div
            onClick={() => {
              handleClickSort("comment_count");
            }}
          >
            Comments
          </div>
        </div>
      </div>
      <button id="order" onClick={handleClickOrder}>
        <i
          className={
            order === "DESC" ? "votes-arrow arrow down" : "votes-arrow arrow up"
          }
        ></i>
      </button>
      <div className="mobile-bar flex-bar-center"></div>
      <div className="mobile-bar" id="mobile-bar-right">
        <div className="dropdown">
          <button className="dropbtn">
            {topicBar || "All"}
            <div className="mobile-bar flex-bar-center"></div>
            <i className="arrow down"></i>
          </button>
          <div id="myDropdown" className="dropdown-content">
            <Link to={`/articles`}>All</Link>
            {topics.map((topic) => {
              return <TopicCard key={topic.slug} topic={topic} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
