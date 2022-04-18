import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

export function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add("night-mode");
        document.body.classList.remove("day-mode");
        break;
      case themes.light:
      default:
        document.body.classList.add("day-mode");
        document.body.classList.remove("night-mode");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
