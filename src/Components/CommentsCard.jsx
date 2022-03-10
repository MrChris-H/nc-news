import { useEffect, useState } from "react";
import { deleteComment, getUser, patchComment } from "../api";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Votes from "./Vote";

const CommentsCard = ({ comment }) => {
  const date = new Date(comment.created_at);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { loggedIn } = useContext(UserContext);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getUser(comment.author).then(({ user: { avatar_url } }) => {
      setAvatarUrl(avatar_url);
      setIsLoading(false);
    });
  }, []);

  const handleClick = () => {
    setDeleted(true);
    deleteComment(comment.comment_id);
  };

  if (isLoading) return <p>Comment Loading...</p>;
  return (
    <section className={deleted ? "hidden" : "section-comment-card "}>
      <div className="comment-card">
        <div className="comment-card-avatar">
          <img
            src={avatarUrl}
            alt={`user ${comment.author} avatar`}
            className="comment-card-avatar-img"
          ></img>
        </div>
        <div className="comment-card-comment">
          <div className="comment-card-owner">
            <h4>{comment.author}</h4>
            <div className="flex-bar-center"></div>
            <div
              className={
                comment.author !== loggedIn.username
                  ? "hidden"
                  : "comment-card-owner comment-card-owner-img-container"
              }
              onClick={handleClick}
            >
              <img
                src="https://www.transparentpng.com/thumb/red-cross/BtjHkS-symbol-clip-art-image-american-red-cross.png"
                className="comment-card-owner-delete"
              ></img>
            </div>
          </div>
          <p className="comment-card-body">{comment.body}</p>
          <div className="comment-card-lower-bar">
            <div className="comment-card-lower-bar comment-card-votes">
              <Votes
                votes={comment.votes}
                apiUpdate={patchComment}
                id={comment.comment_id}
              />
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
