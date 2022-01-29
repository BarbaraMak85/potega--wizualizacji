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
      state.comments = [...action.payload];
    },
  },
});

export const addCommentsToStore = (post_id) => async (dispatch) => {
  const response = await getCommentsApi(post_id);

  dispatch(addComments(response.data));
};

export const { addComments } = slice.actions;

export const comments = (state) => state.comments.comments;

export default slice.reducer;
