import styles from "./MainPage.module.scss";
import { Header, Stats, InputArea, LetterStat } from "../../widgets/index.ts";
import { TextProvider } from "../../shared/contexts/index.ts";

function MainPage() {
  return (
    <TextProvider>
      <div className={styles.wrapper}>
        <Header />
        <InputArea />
        <Stats />
        <LetterStat letter="E" quantity={40} />
      </div>
    </TextProvider>
  );
}

export default MainPage;
