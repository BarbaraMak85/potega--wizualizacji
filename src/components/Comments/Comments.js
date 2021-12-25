import React from "react";
import {
  comments as reduxComments,
  addCommentsToStore,
} from "../../redux/comments";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Comment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCommentsToStore());
  }, []);

  const comments = useSelector(reduxComments);
  // const [comment, setComment] = useState([]);

  // const getComments = async () => {
  //   const response = await getCommentsApi();
  //   const commentsdata = await response.json();
  //   console.log(commentsdata, "comenstdata");
  //   setComment(commentsdata);
  // };

  // useEffect(() => {
  //   getComments();
  // }, []);

  return <div>{}</div>;
};

export default Comment;
