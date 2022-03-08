import { Link } from "react-router-dom";
const TopicCard = ({ topic: { slug }, setTopicFilter }) => {
  return (
    <div>
      <Link to={`/articles/${slug}`}>{slug}</Link>
    </div>
  );
};

export default TopicCard;
