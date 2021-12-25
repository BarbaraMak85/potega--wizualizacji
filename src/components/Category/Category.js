import React from "react";
import { useSelector } from "react-redux";
import { categories as reduxCategories } from "../../redux/categories";
import Titles from "../Titles/Titles";
import styles from "./Category.module.scss";

const Category = ({}) => {
  const categories = useSelector(reduxCategories);
  // const [categories, setCategories] = useState([]);
  // console.log(categories, "categories");

  // const getCategories = async () => {
  //   const response = await getCategoriesApi();
  //   const categorydata = await response.json();

  //   setCategories(categorydata);
  // };
  // useEffect(() => {
  //   getCategories();
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost/potegawizualizacji//wp-json/wp/v2/categories").then(
  //     (response) =>
  //       response
  //         .json()
  //         .then((data) => setCategories(data))
  //         .catch((err) => console.log(err))
  //   );
  // }, []);

  return (
    <div>
      <div>
        <Titles> kategorie</Titles>
      </div>
      <ul>
        {categories.map((category) => (
          <li className={styles.categoryList} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
