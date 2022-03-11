import { useState } from "react";
import { postComment } from "../api";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CommentPost = ({ articleId, commented }) => {
  const { loggedIn } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      postComment(loggedIn.username, comment, articleId).then((added) => {
        commented(added);
      });
    }

    setComment("");
  };
  const handleFocus = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <form id="form-comment-post" onSubmit={handleSubmit} autoComplete="off">
      <div className="comment-post-input">
        <div className="comment-post-avatar">
          <img
            src={loggedIn.avatar_url}
            alt="user avatar"
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
            onFocus={handleFocus}
          />
        </div>
      </div>
      <div className={show ? "comment-post-submit" : "hidden"}>
        <button type="submit" disabled={comment === ""}>
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentPost;
