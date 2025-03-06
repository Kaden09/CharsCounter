import styles from "./Logo.module.scss";
import { Logo as LogoIcon } from "../../../assets/index.ts";

function Logo() {
  return (
    <div className={styles.wrapper}>
      <LogoIcon />
      <h1>Character Counter</h1>
    </div>
  );
}

export default Logo;
