import React from "react";
import styles from "./ChevronDown.module.scss";

import { FaChevronDown } from "react-icons/fa";

const ChevronDown = () => {
  return (
    <div className={styles.chevronDownContainer}>
      <button className={styles.buttonLine}>
        <FaChevronDown className={styles.chevronDownIcon} />
      </button>

      <hr className={styles.line} />
    </div>
  );
};

export default ChevronDown;
