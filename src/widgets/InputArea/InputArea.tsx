import styles from "./InputArea.module.scss";
import { Textarea, Checkbox, ReadingTime } from "../../shared/ui/index.ts";

function InputArea() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}> Analyze your text in real - time.</h2>
      <div className={styles["input-area"]}>
        <Textarea />
        <div className={styles["additional-info"]}>
          <Checkbox label="Exclude Spaces" />
          <ReadingTime />
        </div>
      </div>
    </div>
  );
}

export default InputArea;
