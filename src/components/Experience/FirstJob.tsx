
import styles from "./FirstJob.module.scss"



export const FirstJob = () => {
  return (
    <div className={styles.container}>
        <div className={styles.date}>
            <p>2022 April <span>-</span> 2022 Oct</p>
        </div>
        <div className={styles.right}>
            <h3>ByteForge</h3>
            <p className={styles.position}>Junior Front-End Developer</p>
            <p className={styles.about}>Developed a web app with a Front-end and Admin Dashboard. Users can register, login, and submit journal entries. Admins have control over user management, submissions, news, etc. Implemented Protected Routes and API calls for various functionalities.</p>
            <ul>
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Scss</li>
                <li>React Hooks</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    </div>
  )
}
