import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.tsx";
// import App from "./App";
import CompA from "./CompA";
import App from "./Air/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
