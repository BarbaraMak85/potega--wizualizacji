import axios from "axios";
export const getListFromApi = () =>
  axios.get(
    "https://potegawizualizacji-admin.pl/wp-json/wp-api-menus/v2/menus/7"
  );
