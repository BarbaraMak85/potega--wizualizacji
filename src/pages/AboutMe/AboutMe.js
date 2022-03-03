import React from "react";
import Titles from "../../components/Titles/Titles";
import Woman from "../../assets/zdjęcie.jpg";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import style from "./AboutMe.module.scss";
import Button from "../../components/Button/Button";

const AboutMe = () => {
  const handleClick = () => {
    console.log("klik");
    history.push("/");
  };
  const history = useHistory();
  return (
    <div>
      <Navbar />
      <Logo />
      <div className={style.aboutMe_section}>
        <button
          className={style.button_aboutMe}
          type="button"
          onClick={handleClick}
        >
          Wróć do strony głównej
        </button>
      </div>

      <div className={style.aboutMe}>
        <Titles>O mnie</Titles>
        <img src={Woman} />
        <p className={style.aboutMe_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          quisquam alias consequuntur ipsam mollitia eum unde expedita cum. Quos
          reiciendis, soluta deleniti ex placeat fuga libero officiis labore ea
          sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium, quisquam alias consequuntur ipsam mollitia eum unde
          expedita cum. Quos reiciendis, soluta deleniti ex placeat fuga libero
          officiis labore ea sed.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
