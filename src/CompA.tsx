import React, { useState } from "react";
import ThemeChange from "./ThemeChange";

export const ThemeContext = React.createContext();
const CompA = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333" }}>
          <h1>Chenging Theme</h1>
          <ThemeChange />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};
export default CompA;
