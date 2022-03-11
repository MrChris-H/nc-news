import { Link } from "react-router-dom";
const TopicCard = ({ topic: { slug } }) => {
  return (
    <Link to={`/articles/${slug}`} className="monitor-nav-container">
      <p>{slug}</p>
    </Link>
  );
};

export default TopicCard;
