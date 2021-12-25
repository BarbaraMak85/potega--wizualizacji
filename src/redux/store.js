import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts";
import categoriesSlice from "./categories";
import commentsSlice from "./comments";

export default configureStore({
  reducer: {
    posts: postsSlice,
    categories: categoriesSlice,
    comments: commentsSlice,
  },
});
