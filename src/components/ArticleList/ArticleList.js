import SingleArticleExcerpt from "../SingleArticleExcerpt/SingleArticleExcerpt";

import { postsList } from "../../redux/posts";
import { useSelector } from "react-redux";

import styles from "./ArticleList.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";

import { motion } from "framer-motion";

const blogVariants = {
  enter: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AriticleList = () => {
  const posts = useSelector(postsList);

  const [
    { actualPageIdx, lastPageIdx, entriesOnSelectedPage },
    { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
  ] = usePagination(posts);

  return (
    <section className={styles.primarySection}>
      <section className={styles.sectionWithColumn}>
        <motion.section
          className={styles.articleSection}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={blogVariants}
        >
          {entriesOnSelectedPage.map((post, index) => (
            <SingleArticleExcerpt key={post.id} post={post} index={index} />
          ))}
        </motion.section>
        <section className={styles.sidebarSection}>
          <Sidebar />
        </section>
      </section>
      <Pagination
        lastPageIdx={lastPageIdx}
        goToFirstPage={goToFirstPage}
        goToPrevPage={goToPrevPage}
        goToPage={goToPage}
        goToLastPage={goToLastPage}
        actualPageIdx={actualPageIdx}
      />
    </section>
  );
};

export default AriticleList;
