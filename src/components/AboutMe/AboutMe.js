import React from "react";
import Titles from "../Titles/Titles";
import Woman from "../../assets/zdjęcie.jpg";

import styles from "./AboutMe.module.scss";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <Titles>O mnie</Titles>
      <img src={Woman} />
      <p className={styles.aboutMeParagraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        quisquam alias consequuntur ipsam mollitia eum unde expedita cum. Quos
        reiciendis, soluta deleniti ex placeat fuga libero officiis labore ea
        sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium, quisquam alias consequuntur ipsam mollitia eum unde
        expedita cum. Quos reiciendis, soluta deleniti ex placeat fuga libero
        officiis labore ea sed.
      </p>
      <Link className={styles.link} to="/o-mnie">
        Czytaj więcej
      </Link>
    </div>
  );
};

export default AboutMe;
