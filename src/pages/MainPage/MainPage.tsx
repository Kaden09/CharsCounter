import styles from "./MainPage.module.scss";
import { Header, Stats } from "../../widgets/index.ts";
import { Textarea } from "../../shared/ui/index.ts";
import { useState } from "react";

function MainPage() {
  const [text, setText] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Textarea onChange={handleTextChange} />
      <Stats text={text} />
    </div>
  );
}

export default MainPage;
