import styles from "./Hero.module.scss";
import { Button } from "../Button/Button";
import cv from "../../assets/imgs/CV.png";
import resume from "../../assets/imgs/resume.pdf"

export const Hero = () => {
  const openPdf = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          <span>Hello, I'm Shota,</span> <br /> frontend developer
        </h2>
        <p className={styles.text}>
          a passionate front-end developer with a keen eye for design and a love
          for creating seamless user experiences.
        </p>
      </div>
      <div className={styles.right}>
        <img className={styles.cv} src={cv} alt="" />
        <div className={styles.btn}>
          <Button ButtonText="Open CV" onClick={openPdf} />
        </div>
      </div>
    </div>
  );
};
