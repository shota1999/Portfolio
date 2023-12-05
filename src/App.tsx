import styles from "./App.module.scss"
import { AdditionalSkills } from "./components/AdditionalSkills/AdditionalSkills";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ScrollTopBtn } from "./components/ScrolToTopBtn/ScrolToTopBtn";
import { Technologies } from "./components/Technologies/Technologies";
import { Experience } from "./components/Experience/Exprience";


function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.column}>
        <Hero />
        <section id="Projects">
          <Projects />
        </section>
        <section id="Technologies">
          <Technologies />
        </section>
        <AdditionalSkills />
        <section id="Aboutme">
          <AboutMe />
        </section>
        <section id="Experience">
        <Experience />
        </section>
        <Footer />
        <ScrollTopBtn />
      </div>
    </div>
  );
}

export default App;