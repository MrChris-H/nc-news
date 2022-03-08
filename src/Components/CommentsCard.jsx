import { useEffect, useState } from "react";
import { getUser } from "../api";

const CommentsCard = ({ comment }) => {
  const date = new Date(comment.created_at);
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    getUser(comment.author).then(({ user: { avatar_url } }) => {
      setAvatarUrl(avatar_url);
    });
  }, []);

  return (
    <section className="section-comment-card">
      <div className="comment-card">
        <div className="comment-card-avatar">
          <img
            src={avatarUrl}
            alt={`user ${comment.author} avatar`}
            className="comment-card-avatar-img"
          ></img>
        </div>
        <div className=" comment-card-comment">
          <h4>{comment.author}</h4>
          <p className="comment-card-body">{comment.body}</p>
          <div className="comment-card-lower-bar">
            <div className="comment-card-lower-bar comment-card-votes">
              <p>{comment.votes}</p>
            </div>
            <div className="flex-bar-center"></div>
            <div className="comment-card-lower-bar comment-card-comments">
              <p>{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsCard;
