import styles from "./InputArea.module.scss";
import { Textarea, Checkbox, ReadingTime } from "../../shared/ui/index.ts";
import { IInputArea } from "./InputArea.interface.ts";

function InputArea({ onChange, text }: IInputArea) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}> Analyze your text in real - time.</h2>
      <div className={styles["input-area"]}>
        <Textarea onChange={onChange} />
        <div className={styles["additional-info"]}>
          <Checkbox label="Exclude Spaces" />
          <ReadingTime text={text} />
        </div>
      </div>
    </div>
  );
}

export default InputArea;
