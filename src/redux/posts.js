import {createSlice} from '@reduxjs/toolkit'
import { getPostsFromAPI } from '../api/postApi'

const initialState = {
    postsList: []
}

export const slice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.postsList = [...state.postsList, ...action.payload]
        }
    }
})

export const addPostsToStore = () => async dispatch => {
    const response = await getPostsFromAPI();
    const posts = await response.json();
   
    dispatch(addPosts(posts))
}

export const {addPosts} = slice.actions;

export const postsList = state => state.posts.postsList;

export default slice.reducer