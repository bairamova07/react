import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.tsx";
import App from "./30 week/Day_3/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
