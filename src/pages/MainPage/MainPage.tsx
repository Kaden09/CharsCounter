import styles from "./MainPage.module.scss";
import { Header } from "../../widgets/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}

export default MainPage;
