import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "../pages/index.ts";
import { ThemeProvider } from "../shared/contexts/index.ts";
import "./global.scss";
import "./theme.scss";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <MainPage />
    </StrictMode>
  </ThemeProvider>,
);
