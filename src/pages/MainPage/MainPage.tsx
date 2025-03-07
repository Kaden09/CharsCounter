import styles from "./MainPage.module.scss";
import { Header, Stats } from "../../widgets/index.ts";
import { Textarea, ReadingTime } from "../../shared/ui/index.ts";
import { useState } from "react";

function MainPage() {
  const [text, setText] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <h2 className={styles.title}>Analyze your text in real-time.</h2>
      <Textarea onChange={handleTextChange} />
      <ReadingTime text={text} />
      <Stats text={text} />
    </div>
  );
}

export default MainPage;
