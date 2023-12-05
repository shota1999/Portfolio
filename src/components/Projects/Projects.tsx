import { Button } from "../Button/Button";
import styles from "./Projects.module.scss";
import { ProjectData } from "./ProjectsData";

type ProjectItem = {
  img: string;
  title: string;
  description: string;
  live: string;
  github: string;
};

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.cardsContainer}>
        {ProjectData.map((item: ProjectItem, index: number) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt="" />
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.buttons}>
              <a href={item.live} target="_blank" rel="noopener noreferrer">
                <Button ButtonText="Live preview" />
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button className={styles.gitHubBtn}>Check on GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
