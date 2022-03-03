import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import Titles from "../Titles/Titles";
import LogoFooter from "../../assets/logo.png";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footer}>
      <hr className={style.lineFooter}></hr>
      <section className={style.sectionFooter}>
        <div className={style.section_logo}>
          <img className={style.logoFooter} src={LogoFooter} />
        </div>
        <div className={style.section_subscribe}>
          <Titles>Subskrybuj & Śledź</Titles>
          <Subscribe />
        </div>
      </section>
      <p className={style.text_footer}>Copyright 2022 Barbara Makowiec</p>
    </div>
  );
};

export default Footer;
