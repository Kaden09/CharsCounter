import styles from "./LetterStatList.module.scss";
import { useText } from "../../shared/contexts/index.ts";
import { useEffect } from "react";
import { LetterStat } from "../index.ts";

function LetterStatList() {
  const { text, spacesChecked, letters, fillLetters } = useText();

  useEffect(() => {
    fillLetters(text);
  }, [text, spacesChecked]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Letter Density</h2>
      {Object.keys(letters).length > 0 ? (
        Object.entries(letters).map(([key, value], i) => (
          <div key={i}>
            <LetterStat
              letter={key === " " ? '" "' : key}
              quantity={value}
              percents={((100 / text.length) * value).toFixed(2)}
            />
          </div>
        ))
      ) : (
        <p className={styles["empty-message"]}>
          No characters found. Start typing to see letter density.
        </p>
      )}
    </div>
  );
}

export default LetterStatList;
