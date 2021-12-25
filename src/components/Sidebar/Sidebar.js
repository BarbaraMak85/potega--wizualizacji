import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Category from "../Category/Category";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={styles.containerSidebar}>
      <AboutMe />

      <Category />
    </div>
  );
};

export default Sidebar;
