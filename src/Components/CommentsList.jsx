import React, { useState, useEffect } from "react";
import { getComments } from "../api";
import CommentsCard from "./CommentsCard";
const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getComments().then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);
  return (
    <section d="section-comments-list">
      {comments.map((comment) => {
        return <CommentsCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};

export default CommentsList;
