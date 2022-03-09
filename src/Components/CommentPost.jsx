const CommentPost = () => {
  return (
    <section id="section-comment-post">
      <div className="comment-post">
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
            name="comment"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    </section>
  );
};

export default CommentPost;
