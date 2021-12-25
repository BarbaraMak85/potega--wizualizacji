import { getHumanDate } from "../../helpers/dateHelper";
import { useRef, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ChevronDown from "../ChevronDown/ChevronDown";
import styles from "./SingleArticleExcerpt.module.scss";
import CommentIcon from "../CommentIcon/CommentIcon";
import DataIcon from "../DataIcon/DataIcon";
import { categories as reduxCategories } from "../../redux/categories";
import { useSelector } from "react-redux";
// import { CircleIndicator } from "../CircleIndicator/CircleIndicator";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: "easeInOut" };

const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition },
};

const SingleArticleExcerpt = ({ post, index }) => {
  const excerptRef = useRef(null);
  const categories = useSelector(reduxCategories);
  console.log(post);
  console.log(categories);

  useEffect(() => {
    excerptRef.current.innerHTML = post.excerpt.rendered;
  }, [post.excerpt.rendered]);
  console.log(excerptRef);

  const style = {};
  if (index === 0) {
    style.gridColumn = "span 2";
  }

  return (
    <motion.section
      className={styles.sectionArticleExcerpt}
      style={style}
      variants={postPreviewVariants}
    >
      <article className={styles.sectionArticle} key={post.id}>
        <div>
          {post._embedded["wp:featuredmedia"] && (
            <img
              className={styles.imgListArticle}
              alt={"alt-" + post.id}
              src={post._embedded["wp:featuredmedia"]["0"].source_url}
            />
          )}

          <Link to={"/artykul/" + post.slug}>
            <ChevronDown />
          </Link>
        </div>
        <h2 className={styles.titleArticle}> {post.title.rendered}</h2>
        <div className={styles.dataContainer}>
          <time className={styles.times}>{getHumanDate(post.date)}</time>
          <DataIcon />
        </div>

        <div className={styles.sectionArticleParagraph} ref={excerptRef}></div>

        <Link to={"/artykul/" + post.slug}>
          <Button>Więcej</Button>
        </Link>

        <div className={styles.panelCategory}>
          {categories
            .filter((el) => post.categories.find((findEl) => findEl === el.id))
            .map((el) => (
              <span className={styles.categoryList} key={el.id}>
                {el.name}
              </span>
            ))}
          <Link className={styles.icons} to={"/artykul/" + post.slug}>
            <CommentIcon />
            <p className={styles.commentsParagfaph}>dodaj komentarz</p>
          </Link>
        </div>
      </article>
    </motion.section>
  );
};

export default SingleArticleExcerpt;
