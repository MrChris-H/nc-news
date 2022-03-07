import React, { useState, useEffect } from "react";
import { getArticles } from "../api";

const ArticlesList = () => {
  const [articles, setArticles] = useState;

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);
  return (
    <section id="section-articles-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticlesList;
