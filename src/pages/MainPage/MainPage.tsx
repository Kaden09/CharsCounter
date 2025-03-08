import styles from "./MainPage.module.scss";
import { Header, Stats, InputArea } from "../../widgets/index.ts";
import { TextProvider } from "../../shared/contexts/index.ts";

function MainPage() {
  return (
    <TextProvider>
      <div className={styles.wrapper}>
        <Header />
        <InputArea />
        <Stats />
      </div>
    </TextProvider>
  );
}

export default MainPage;
