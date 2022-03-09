import { useState } from "react";
import { postComment } from "../api";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CommentPost = ({ articleId, commented }) => {
  const { loggedIn } = useContext(UserContext);
  console.log(loggedIn);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      postComment(loggedIn.username, comment, articleId).then((added) => {
        commented();
      });
    }

    setComment("");
  };

  return (
    <form id="form-comment-post" onSubmit={handleSubmit}>
      <div className="comment-post-input">
        <div className="comment-post-avatar">
          <img
            src={loggedIn.avatar_url}
            className="comment-card-avatar-img"
          ></img>
        </div>
        <div className="comment-post-content">
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
        </div>
      </div>
      <div className="comment-post-submit">
        <button type="submit">Comment</button>
      </div>
    </form>
  );
};

export default CommentPost;
