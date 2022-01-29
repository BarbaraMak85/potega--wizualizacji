import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesApi } from "../api/categoriesApi";

const initialState = {
  categories: [],
};

export const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = [...state.categories, ...action.payload];
    },
  },
});

export const addCategoriesToStore = () => async (dispatch) => {
  const response = await getCategoriesApi();
  dispatch(addCategories(response.data));
};

export const { addCategories } = slice.actions;

export const categories = (state) => state.categories.categories;

export default slice.reducer;
