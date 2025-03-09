import styles from "./LetterStat.module.scss";
import { ILetterStat } from "./LetterStat.interface.ts";

function LetterStat({ letter, quantity, percents }: ILetterStat) {
  return (
    <div className={styles["letter-stat"]}>
      <span className={styles.letter}>{letter}</span>
      <div className={styles.progressbar}>
        <div
          className={styles.progress}
          style={{ width: `${percents}%` }}
        ></div>
      </div>
      <div className={styles["stat-values"]}>
        <span className={styles.quantity}>{quantity}</span>
        <span className={styles.percents}>({percents}%)</span>
      </div>
    </div>
  );
}

export default LetterStat;
