import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import styles from "./PagesPosts.module.scss";
import { postsList } from "../../redux/posts";
import { useSelector } from "react-redux";
import SingleArticleExcerpt from "../../components/SingleArticleExcerpt/SingleArticleExcerpt";

import { motion } from "framer-motion";
import Category from "../../components/Category/Category";

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const PagesPosts = () => {
  const posts = useSelector(postsList);
  return (
    <div>
      <Navbar />
      <Logo />
      <div>
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
              <Category />
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PagesPosts;
