export interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface IThemeProvider {
  children: React.ReactNode;
}
