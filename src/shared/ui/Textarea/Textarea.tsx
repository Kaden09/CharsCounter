import styles from "./Textarea.module.scss";
import { useText } from "../../contexts/index.ts";

function Textarea() {
  const { onChange } = useText();

  return (
    <textarea
      onChange={onChange}
      className={styles.textarea}
      placeholder="Start typing here...(or paste your text)"
    ></textarea>
  );
}

export default Textarea;
