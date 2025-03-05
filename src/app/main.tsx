import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import { MainPage } from "../pages/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
