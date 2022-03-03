import React from "react";
import ReactLoading from "react-loading";
import styles from "./Loader.module.scss";
const Loader = ({ type, color }) => (
  <ReactLoading
    className={styles.loader}
    type={type}
    color="#ff3c00"
    height={"20%"}
    width={"100%"}
  />
);

export default Loader;
