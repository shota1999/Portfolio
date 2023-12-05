
import { Link } from "react-scroll";
import Rocket from "../../assets/imgs/space-rocket.svg";
import styles from "./ScrollToTopBtn.module.scss";

export const ScrollTopBtn = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (2000 / 8); 

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    } );
  };

  return (
    <div>
      <Link
        className={styles.btn}
        to="#"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        onClick={scrollToTop}
      >
        <img src={Rocket} alt="Scroll to Top" />
      </Link>
    </div>
  );
};
