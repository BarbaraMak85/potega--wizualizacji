import base from "./base";
export const getPostsFromAPI = () => base.get("posts?_embed");
