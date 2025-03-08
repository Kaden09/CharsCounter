import styles from "./MainPage.module.scss";
import { Header, Stats, InputArea } from "../../widgets/index.ts";
import { useState } from "react";

function MainPage() {
  const [text, setText] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <InputArea onChange={handleTextChange} text={text} />
      <Stats text={text} />
    </div>
  );
}

export default MainPage;
