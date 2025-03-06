import styles from "./Textarea.module.scss";

function Textarea() {
  return (
    <textarea
      className={styles.textarea}
      placeholder="Start typing here...(or paste your text)"
    ></textarea>
  );
}

export default Textarea;
