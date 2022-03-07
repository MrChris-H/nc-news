const ArticleCard = ({ article }) => {
  const { title, topic, author, created_at, votes, comment_count } = article;

  const date = new Date(created_at);
  console.log(`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`);
  return (
    <article>
      <h4>{title}</h4>
      <p>{votes}</p>
      <p>{author}</p>
      <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
      <p>{comment_count}</p>
    </article>
  );
};

export default ArticleCard;
