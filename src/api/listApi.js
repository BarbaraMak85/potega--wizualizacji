import axios from "axios";
export const getListFromApi = () =>
  axios.get(
    "http://localhost/potegawizualizacji/wp-json/wp-api-menus/v2/menus/7"
  );
