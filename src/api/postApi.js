import axios from "axios";

export const getPostsFromAPI = () =>
  axios.get("http://localhost/potegawizualizacji//wp-json/wp/v2/posts?_embed");
