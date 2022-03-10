import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => {
  const { title, topic, author, created_at, votes, comment_count } = article;

  const date = new Date(created_at);
  return (
    <article className="article-card">
      <Link to={`/article/${article.article_id}`}>
        <h4>{title}</h4>
      </Link>

      {/* <p>{topic}</p> */}
      <div className="article-card-lower-bar">
        <div className="article-card-lower-bar comments-card-votes">
          <p>{votes}</p>
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
