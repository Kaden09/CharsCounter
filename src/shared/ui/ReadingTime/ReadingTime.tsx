import styles from "./ReadingTime.module.scss";
import { useState, useEffect } from "react";
import { useText } from "../../contexts/index.ts";

function ReadingTime() {
  const { text } = useText();
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Math.floor(text.length / 200));
  }, [text]);

  return <p className={styles.time}>Approx. reading time: {time} minutes</p>;
}

export default ReadingTime;
