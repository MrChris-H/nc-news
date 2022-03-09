import { useState } from "react";

const CommentPost = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setComment("");
  };

  return (
    <form id="form-comment-post" onSubmit={handleSubmit}>
      <div className="comment-post-input">
        <div className="comment-post-avatar">
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/71b9faed-de95-4263-8c3f-70bf3dac28b6-profile_image-300x300.png"
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
