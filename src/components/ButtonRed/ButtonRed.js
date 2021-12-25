import React from "react";
import styles from "./ButtonRed.module.scss";

function ButtonRed({ children }) {
  return (
    <div>
      <button className={styles.buttonRed}>{children}</button>
    </div>
  );
}

export default ButtonRed;