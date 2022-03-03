import SingleArticleExcerpt from "../SingleArticleExcerpt/SingleArticleExcerpt";

import { postsList } from "../../redux/posts";
import { useSelector } from "react-redux";

import styles from "./ArticleList.module.scss";
import Sidebar from "../Sidebar/Sidebar";

import { motion } from "framer-motion";

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const AriticleList = () => {
  const posts = useSelector(postsList);

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
          {posts.map((post, index) => (
            <SingleArticleExcerpt key={post.id} post={post} index={index} />
          ))}
        </motion.section>
        <section className={styles.sidebarSection}>
          <Sidebar />
        </section>
      </section>
    </section>
  );
};

export default AriticleList;
