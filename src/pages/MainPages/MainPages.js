import AriticleList from "../../components/ArticleList/ArticleList";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import styles from "./MainPages.module.scss";
import Comments from "../../components/Comments/Comments";
function MainPage() {
  return (
    <div>
      <Navbar />
      <Logo />
      <div className={styles.containerSlider}>
        <Slider />
      </div>

      <AriticleList />
      <Comments />
      <Footer />
    </div>
  );
}

export default MainPage;
