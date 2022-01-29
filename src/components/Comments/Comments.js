import React from "react";
import {
  comments as reduxComments,
  addCommentsToStore,
} from "../../redux/comments";
import Commentitem from "../CommentItem";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Comment = ({ post_id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCommentsToStore(post_id));
  }, []);

  const comments = useSelector(reduxComments);

  return (
    <ul>
      {comments.map((el) => (
        <Commentitem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default Comment;
