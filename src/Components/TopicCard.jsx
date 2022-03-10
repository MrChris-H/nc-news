import { Link } from "react-router-dom";
const TopicCard = ({ topic: { slug }}) => {
  return (
    <div>
      <Link to={`/articles/${slug}`}>{slug}</Link>
    </div>
  );
};

export default TopicCard;
