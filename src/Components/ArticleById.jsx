import React, { useState, useEffect } from "react";
import { deleteArticle, getArticle } from "../api";
import { useParams } from "react-router-dom";
import { patchArticle } from "../api";
import CommentSection from "./CommentSection";
import Votes from "./Vote";
import Delete from "./Delete";
import ErrorPage from "./ErrorPage";

const ArticleByID = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState({});
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getArticle(articleId)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  const commented = (newComment) => {
    setNewComment(newComment);
    getArticle(articleId).then(({ article }) => {
      setArticle(article);
    });
  };

  const date = new Date(article.created_at);
  if (error) {
    return (
      <ErrorPage
        msg={error.err.response.data.msg}
        status={error.err.response.status}
      />
    );
  }
  if (isLoading) return <p>Loading ...</p>;

  return (
    <section>
      <article className={deleted ? "hidden" : "article-card"}>
        <div className="article-card-owner">
          <h2>{article.title}</h2>
          <Delete
            createdBy={article.author}
            setDeleted={setDeleted}
            id={article.article_id}
            apiDelete={deleteArticle}
          />
        </div>

        <p>{article.body}</p>
        <div className="article-card-lower-bar">
          <div className="article-card-lower-bar article-card-votes">
            <Votes
              votes={article.votes}
              apiUpdate={patchArticle}
              id={articleId}
            />
          </div>
          <div className="article-card-lower-bar article-card-creation">
            <p>{article.author}</p>
            <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
          </div>
          <div className="article-card-lower-bar article-card-comments">
            <img
              src="https://icon-library.com/images/icon-comments/icon-comments-18.jpg"
              className="article-comments-img"
            ></img>
            <p>{article.comment_count}</p>
          </div>
        </div>
      </article>
      <section className={deleted ? "hidden" : null}>
        <CommentSection
          articleId={articleId}
          commentCount={article.comment_count}
          commented={commented}
          newComment={newComment}
        />
      </section>
    </section>
  );
};

export default ArticleByID;
