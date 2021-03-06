import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteArticle, patchArticle } from "../api";
import Delete from "./Delete";
import Votes from "./Vote";
const ArticleCard = ({ article }) => {
  const { title, author, created_at, comment_count } = article;
  const [deleted, setDeleted] = useState(false);
  const date = new Date(created_at);
 
 
 
  return (
    <article className={deleted ? "hidden" : "article-card"}>
      <div className="article-card-owner">
        <Link to={`/article/${article.article_id}`} className="flex-stretch">
          <h4>{title}</h4>
        </Link>
        <Delete
          createdBy={article.author}
          setDeleted={setDeleted}
          id={article.article_id}
          apiDelete={deleteArticle}
        />
      </div>

      {/* <p>{topic}</p> */}
      <div className="article-card-lower-bar">
        <div className="article-card-lower-bar comments-card-votes">
          <Votes
            votes={article.votes}
            apiUpdate={patchArticle}
            id={article.article_id}
          />
        </div>
        <Link
          to={`/article/${article.article_id}`}
          className="flex-bar-center article-card-creation-details"
        >
          <p>{author}</p>
          <div className="flex-stretch"></div>
          <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
        </Link>
        <Link
          to={`/article/${article.article_id}`}
          className="article-card-lower-bar comments-card-date"
        >
          <img
            src="https://icon-library.com/images/icon-comments/icon-comments-18.jpg"
            alt="comment icon"
            className="article-comments-img"
          ></img>
          <p>{comment_count}</p>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
