import styles from "./MainPage.module.scss";
import { Header } from "../../widgets/index.ts";
import { Textarea } from "../../shared/ui/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Textarea />
    </div>
  );
}

export default MainPage;
