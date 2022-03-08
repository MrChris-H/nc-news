import React, { useState, useEffect } from "react";
import { getArticle, getArticles } from "../api";
import { useParams } from "react-router-dom";

const ArticleByID = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  useEffect(() => {
    getArticle(articleId).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  const date = new Date(article.created_at);
  return (
    <article className="article-card">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <div className="article-card-lower-bar">
        <div className="article-card-lower-bar article-card-votes">
          <p>{article.votes}</p>
        </div>
        <div className="article-card-lower-bar article-card-creation">
          <p>{article.author}</p>
          <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
        </div>
        <div className="article-card-lower-bar article-card-comments">
          <p>{article.comment_count}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleByID;
