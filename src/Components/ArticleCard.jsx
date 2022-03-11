import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteArticle, patchArticle } from "../api";
import Delete from "./Delete";
import Votes from "./Vote";
const ArticleCard = ({ article }) => {
  const { title, topic, author, created_at, votes, comment_count } = article;
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
        <div className="flex-bar-center">
          <p>{author}</p>
          <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
        </div>
        <div className="article-card-lower-bar comments-card-date">
          <img
            src="https://icon-library.com/images/icon-comments/icon-comments-18.jpg"
            className="article-comments-img"
          ></img>
          <p>{comment_count}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
