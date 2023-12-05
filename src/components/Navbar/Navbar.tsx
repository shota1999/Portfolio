import styles from "./Navbar.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const list = [
  {
    li: "Projects",
    id: "Projects",
  },
  {
    li: "Technologies",
    id: "Technologies",
  },
  {
    li: "About me",
    id: "Aboutme",
  },
  {
    li: "Experience",
    id: "Experience",
  },
];

const linkedinProfileUrl =
  "https://www.linkedin.com/in/shota-bosikashvili-a240b8271/";
const githubProfileUrl = "https://github.com/shota1999";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2>S.B. portfolio</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <Link
              className={styles.li}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100} 
              duration={1000}
            >
              {item.li}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.social}>
        <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
