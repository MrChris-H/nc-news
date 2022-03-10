import React, { useState, useEffect } from "react";
import { getArticle } from "../api";
import { useParams } from "react-router-dom";
import { patchArticle } from "../api";
import CommentSection from "./CommentSection";
import Votes from "./Vote";

const ArticleByID = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState({});
  useEffect(() => {
    getArticle(articleId).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  const commented = (newComment) => {
    setNewComment(newComment);
    getArticle(articleId).then(({ article }) => {
      setArticle(article);
    });
  };

  const date = new Date(article.created_at);
  if (isLoading) return <p>Loading ...</p>;

  return (
    <section>
      <article className="article-card">
        <h2>{article.title}</h2>
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

      <CommentSection
        articleId={articleId}
        commentCount={article.comment_count}
        commented={commented}
        newComment={newComment}
      />
    </section>
  );
};

export default ArticleByID;
