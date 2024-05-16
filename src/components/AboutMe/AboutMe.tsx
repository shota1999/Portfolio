
import styles from "./AboutMe.module.scss";



export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1>About me </h1>
      <p className={styles.text}>I am a self-taught frontend developer with a passion for creating engaging user experiences. 
      My coding journey began with FreeCodeCamp and Udemy courses , where I diligently honed my skills.
       I am proud to hold a <a className={styles.link}  target="_blank" rel="noopener noreferrer" href="https://www.Udemy courses.org/certification/ShotaBosikashvili/responsive-web-design"> Data structures and algorithms certificate</a> from Udemy, a testament to my commitment to the web development. 
       This certification not only validates my skills but also reflects my dedication to staying current with industry best practices.
      </p>
    </div>
  );
};