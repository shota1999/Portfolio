
import styles from "./Button.module.scss"


type ButtonTextProp = {
  ButtonText:string
  onClick?:() => void
}


export const Button = ({ButtonText,onClick}:ButtonTextProp) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>{ButtonText}</button>
    </div>
  );
};