import styles from "./ReadingTime.module.scss";
import { IReadingTime } from "./ReadingTime.interface.ts";
import { useState, useEffect } from "react";

function ReadingTime({ text }: IReadingTime) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Math.floor(text.length / 200));
  }, [text]);

  return <p className={styles.time}>Approx. reading time: {time} minutes</p>;
}

export default ReadingTime;
