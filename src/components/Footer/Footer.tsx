
import styles from "./Footer.module.scss"
import GmailLogo from "../../assets/imgs/GmailLogo.png"

export const Footer = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li><span>Feel free to contact me</span> </li>
        <li><img src={GmailLogo} alt="GmailLogo" />shbosika@gmail.com</li>
      </ul>
    </div>
  )
}