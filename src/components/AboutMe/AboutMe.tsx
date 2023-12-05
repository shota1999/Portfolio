
import styles from "./AboutMe.module.scss";



export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1>About me </h1>
      <p className={styles.text}>I am a self-taught frontend developer with a passion for crafting engaging user experiences. My coding journey began with Udemy courses and FreeCodeCamp, where I diligently honed my skills. I am proud to hold a <a className={styles.link}  target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/ShotaBosikashvili/responsive-web-design">certificate</a> from FreeCodeCamp, a testament to my commitment to mastering the art of frontend development. This certification not only validates my skills but also reflects my dedication to staying current with industry best practices. I am excited to leverage my expertise to create innovative and user-friendly interfaces, and I look forward to contributing to the ever-evolving world of web development.</p>
    </div>
  );
};