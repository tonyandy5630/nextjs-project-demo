import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "../comments/CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quotesId } = params;
  let comments;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest]);

  const onAddCommentHandler = useCallback(() => {
    if (status === "pending") {
      comments = (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      );
    } else {
      sendRequest(quotesId);
    }
  }, [sendRequest, quotesId]);

  if (status === "completed" && loadedComments) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (status === "completed" && loadedComments && loadedComments.length === 0) {
    comments = <p className='centered'>No comments</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quotesId}
          onAddComment={onAddCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};
export default Comments;
