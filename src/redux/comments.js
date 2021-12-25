import { createSlice } from "@reduxjs/toolkit";
import { getCommentsApi } from "../api/commentsApi";

const initialState = {
  comments: [],
};

export const slice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: (state, action) => {
      state.comments = [...state.comments, ...action.payload];
    },
  },
});

export const addCommentsToStore = () => async (dispatch) => {
  const response = await getCommentsApi();
  const comments = await response.json();
  dispatch(addComments(comments));
};

export const { addComments } = slice.actions;

export const comments = (state) => state.comments.comments;

export default slice.reducer;
