import React, { useContext } from "react";
import { ThemeContext } from "./CompA";

const ThemeChange = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const clickTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>ThemeContext</h1>
      <p>Qazirgi background:{theme}</p>
      <button onClick={clickTheme}>
        <p>Background-ti {theme === "light" ? "dark" : "light"} etu</p>
      </button>
    </div>
  );
};
export default ThemeChange;
