import styles from "./Header.module.scss";
import { Logo } from "../../shared/ui/index.ts";
import { ThemeSwitcher } from "../../shared/ui/index.ts";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
