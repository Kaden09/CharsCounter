import { useState, useEffect, createContext } from "react";
import { IThemeContext, IThemeProvider } from "../../config/theme.ts";

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
