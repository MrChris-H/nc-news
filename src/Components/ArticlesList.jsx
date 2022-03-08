import React, { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import NavMobile from "./NavMobile";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);
  return (
    <section id="section-articles-list">
      <NavMobile />
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticlesList;
