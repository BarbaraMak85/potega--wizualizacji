import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Subscribe.module.scss";

function Subscribe() {
  return (
    <div className={styles.subscribeWrapper}>
      <div className={styles.subscribeWrapper_icon}>
        <FontAwesomeIcon
          className={styles.subscribeWrapper_smicon}
          icon={faFacebookF}
          size="2x"
        />
      </div>
      <div className={styles.subscribeWrapper_icon}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <div className={styles.subscribeWrapper_icon}>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </div>
      <div className={styles.subscribeWrapper_icon}>
        <FontAwesomeIcon icon={faPinterestP} size="2x" />
      </div>
      <div className={styles.subscribeWrapper_icon}>
        <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
      </div>
    </div>
  );
}

export default Subscribe;
