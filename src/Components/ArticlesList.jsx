import React, { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import NavMobile from "./NavMobile";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState("DESC");
  const [sort, setSort] = useState("created_at");
  const { topic } = useParams();
  const [error, setError] = useState(null);
  const [articleLimit, setArticleLimit] = useState(10);
  const [buttonHidden, setButtonHidden] = useState(false);
  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (first) {
      setIsLoading(true);
    }
    getArticles(topic, sort, order, articleLimit)
      .then(({ articles }) => {
        setArticles(articles);
        setError(null);
        setIsLoading(false);
        setFirst(false);
      })
      .catch(
        (err) => {
          setError({ err });
        },
        [articleLimit]
      );
  }, [topic, sort, order, articleLimit]);
  if (error) {
    return (
      <ErrorPage
        msg={error.err.response.data.msg}
        status={error.err.response.status}
      />
    );
  }
  const moreArticles = () => {
    const newArticleLimit = articleLimit + 10;
    console.log(articles.length, newArticleLimit);
    if (newArticleLimit >= articles.length + 11) {
      setButtonHidden(true);
    }
    setArticleLimit(newArticleLimit);
  };

  if (isLoading) return <p>Loading ...</p>;
  return (
    <section id="section-articles-list">
      <NavMobile
        setOrder={setOrder}
        order={order}
        topicBar={topic}
        sort={sort}
        setSort={setSort}
      />
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
      <button
        type="button"
        onClick={moreArticles}
        className={buttonHidden ? "hidden" : null}
      >
        More Articles
      </button>
    </section>
  );
};

export default ArticlesList;
