import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef, Fragment } from "react";
import { postsList } from "../../redux/posts";
import { getHumanDate } from "../../helpers/dateHelper";
import styles from "./SingleArticle.module.scss";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import Commentform from "../../CommentForm/CommentForm";
import Comment from "../Comments/Comments";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};

const SingleArticle = () => {
  const params = useParams();

  const posts = useSelector(postsList);
  const [post, setPost] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const findPost = posts.find((post) => post.slug === params.slug);

    if (posts.length > 0 && !findPost) {
      console.log("404");
    } else {
      console.log(findPost);
      setPost(findPost);
    }
  }, [posts.length]);

  useEffect(() => {
    if (contentRef && post) {
      contentRef.current.innerHTML = post.content.rendered;
    }
  }, [post]);

  return (
    <Fragment>
      <div className={styles.linkWrapper}>
        <Link to="/">
          <ImArrowLeft />
        </Link>
      </div>
      <motion.article
        className={styles.loader}
        initial="exit"
        animate="enter"
        exit="exit"
        variants={postVariants}
      >
        {!post && (
          <div>
            <Loader />
          </div>
        )}
        {post && (
          <div className={styles.sectionArticle}>
            <h1>{post.title.rendered}</h1>
            <time>{getHumanDate(post.date)}</time>
            {post._embedded["wp:featuredmedia"] && (
              <img
                className={styles.sectionArticleImg}
                alt={"alt-" + post.id}
                src={post._embedded["wp:featuredmedia"]["0"].source_url}
              />
            )}
            <div className={styles.sectionContent}>
              <p ref={contentRef}>{post.content.rendered}</p>
            </div>
          </div>
        )}
      </motion.article>
      {post && <Commentform post_id={post.id} />}
      {post && <Comment post_id={post.id} />}
    </Fragment>
  );
};
export default SingleArticle;
