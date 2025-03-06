import { IThemeProvider } from "../../shared/config/theme.ts";
import { ThemeProvider as ThemeCtxProvider } from "../../shared/contexts/index.ts";

function ThemeProvider({ children }: IThemeProvider) {
  return <ThemeCtxProvider>{children}</ThemeCtxProvider>;
}

export default ThemeProvider;
