import { useState } from "react";
import CommentPost from "./CommentPost";
import CommentsList from "./CommentsList";

const CommentSection = ({ articleId }) => {
  const [added, setAdded] = useState(false);
  const commented = (added) => {
    setAdded(true);
    setAdded(false);
  };

  return (
    <section>
      <CommentPost articleId={articleId} commented={commented} />
      <CommentsList articleId={articleId} added={added} />
    </section>
  );
};

export default CommentSection;
