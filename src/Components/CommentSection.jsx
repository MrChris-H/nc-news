import { useEffect, useState } from "react";
import CommentPost from "./CommentPost";
import CommentsList from "./CommentsList";

const CommentSection = ({ articleId, commentCount, commented, newComment }) => {
  const [commentLimit, setCommentLimit] = useState(10);
  const [buttonHidden, setButtonHidden] = useState(false);

  useEffect(() => {
    if (commentLimit < commentCount) {
      setButtonHidden(false);
    }
  }, [commentCount]);

  const moreComments = () => {
    const newCommentLimit = commentLimit + 10;
    if (newCommentLimit >= commentCount) {
      setButtonHidden(true);
    }
    setCommentLimit(newCommentLimit);
  };
  return (
    <section>
      <CommentPost articleId={articleId} commented={commented} />
      <CommentsList
        articleId={articleId}
        commentLimit={commentLimit}
        newComment={newComment}
      />
      <button
        type="button"
        onClick={moreComments}
        className={buttonHidden ? "hidden" : null}
      >
        More comments
      </button>
    </section>
  );
};

export default CommentSection;
