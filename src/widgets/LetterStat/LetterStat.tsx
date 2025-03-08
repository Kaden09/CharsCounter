import styles from "./LetterStat.module.scss";
import { ILetterStat } from "./LetterStat.interface.ts";

function LetterStat({ letter, quantity }: ILetterStat) {
  return (
    <div className={styles["letter-stat"]}>
      <span className={styles.letter}>{letter}</span>
      <div className={styles.progressbar}>
        <div className={styles.progress}></div>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
        <span className={styles.percents}>(40%)</span>
      </div>
    </div>
  );
}

export default LetterStat;
