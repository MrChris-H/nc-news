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

  return (
    <div>
      <p>article</p>
    </div>
  );
};

export default ArticleByID;
