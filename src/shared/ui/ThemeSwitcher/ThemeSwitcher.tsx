import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext.tsx";
import { Sun, Moon } from "../../../assets/index.ts";
import styles from "./ThemeSwitcher.module.scss";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <button className={styles.switcher} onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitcher;
