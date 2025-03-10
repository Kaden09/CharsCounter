import styles from "./Stats.module.scss";
import { StatItem } from "../../shared/ui/index.ts";
import { useState, useEffect } from "react";
import { useText } from "../../shared/contexts/index.ts";
import { CharsIcon, WordsIcon, SentencesIcon } from "../../assets/index.ts";

function Stats() {
  const { text, spacesChecked } = useText();

  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);

  useEffect(() => {
    if (spacesChecked) {
      setChars(text.split(" ").join("").length);
    } else {
      setChars(text.length);
    }
    setWords(
      text.split(/[\s,.\!?;:@()\[\]"'{}=_$<>\u00AB\u00BB]+/).filter((el) => el)
        .length,
    );
    setSentences(text.split(/\. |\! |\? |[.\!?;]+/).filter((el) => el).length);
  }, [text, spacesChecked]);

  return (
    <div className={styles["stats"]}>
      <StatItem
        statValue={chars}
        statLabel="Chars Counter"
        background="violet"
        icon={<CharsIcon />}
      />
      <StatItem
        statValue={words}
        statLabel="Words Counter"
        background="yellow"
        icon={<WordsIcon />}
      />
      <StatItem
        statValue={sentences}
        statLabel="Sentences Counter"
        background="red"
        icon={<SentencesIcon />}
      />
    </div>
  );
}

export default Stats;
