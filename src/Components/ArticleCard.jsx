const ArticleCard = ({ article }) => {
  const { title, topic, author, created_at, votes, comment_count } = article;

  const date = new Date(created_at);
  console.log(`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`);
  return (
    <article className="article-card">
      <h4>{title}</h4>
      <div className="article-card-lower-bar">
        <div className="article-card-lower-bar article-card-votes">
          <p>{votes}</p>
        </div>
        <div className="article-card-lower-bar article-card-creation">
          <p>{author}</p>
          <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
        </div>
        <div className="article-card-lower-bar article-card-comments">
          <p>{comment_count}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
