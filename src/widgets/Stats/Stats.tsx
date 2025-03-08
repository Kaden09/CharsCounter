import styles from "./Stats.module.scss";
import { StatItem } from "../../shared/ui/index.ts";
import { useState, useEffect } from "react";
import { useText } from "../../shared/contexts/index.ts";

function Stats() {
  const { text } = useText();

  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);

  useEffect(() => {
    setChars(text.length);
    setWords(
      text.split(/[\s,.\!?;:@()\[\]"'{}=_$<>\u00AB\u00BB]+/).filter((el) => el)
        .length,
    );
    setSentences(text.split(/\. |\! |\? |[.\!?;]+/).filter((el) => el).length);
  }, [text]);

  return (
    <div className={styles["stats"]}>
      <StatItem
        statValue={chars}
        statLabel="Chars Counter"
        background="violet"
      />
      <StatItem
        statValue={words}
        statLabel="Words Counter"
        background="yellow"
      />
      <StatItem
        statValue={sentences}
        statLabel="Sentences Counter"
        background="red"
      />
    </div>
  );
}

export default Stats;
