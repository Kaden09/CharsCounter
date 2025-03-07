import styles from "./Textarea.module.scss";
import { ITextarea } from "./Textarea.interface.ts";

function Textarea({ onChange }: ITextarea) {
  return (
    <textarea
      onChange={onChange}
      className={styles.textarea}
      placeholder="Start typing here...(or paste your text)"
    ></textarea>
  );
}

export default Textarea;
