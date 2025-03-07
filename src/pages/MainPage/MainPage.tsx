import styles from "./MainPage.module.scss";
import { Header } from "../../widgets/index.ts";
import { Textarea, StatItem } from "../../shared/ui/index.ts";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Textarea />
      <StatItem statLabel="Chars counter" background="yellow" />
    </div>
  );
}

export default MainPage;
