import React from "react";
import LogoMain from "../../assets/logo.png";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImage} src={LogoMain} />
      <p className={styles.paragraphLogo}>Miejsce na slogan</p>
    </div>
  );
};

export default Logo;
