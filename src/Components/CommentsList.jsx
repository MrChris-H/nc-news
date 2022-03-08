import React, { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentsCard from "./CommentsCard";

const CommentsList = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getComments(articleId).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Comments Loading...</p>;
  return (
    <section id="section-comments-list">
      {comments.map((comment) => {
        return <CommentsCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};

export default CommentsList;
