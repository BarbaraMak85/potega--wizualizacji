import React from "react";
import styles from "./Titles.module.scss";

function Titles({ children }) {
  return (
    <div className={styles.titles}>
      <div className={styles.titles_text}>{children}</div>
      <hr className={styles.titles_line} />
    </div>
  );
}

export default Titles;
