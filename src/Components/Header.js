import React, { useState } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="sticky">
      <span onClick={() => setIsMenuShown((m) => !m)} id="toggle-menu-mobile">
        {isMenuShown ? "✕" : "☰"}
      </span>
      <div id="menu" className={isMenuShown ? "" : "menu-hidden"}>
        <nav>
          <a href="#home">Home</a>
          <a href="#about_me">About me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>

          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <>
                <input
                  type="checkbox"
                  checked={darkMode}
                  id="style-mode-checkbox"
                  value="style-mode"
                  ref={null}
                  onChange={() => {
                    setDarkMode((d) => !d);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                  className="toggle toggle-mode"
                />
                <label htmlFor="style-mode-checkbox">
                  <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                </label>
              </>
            )}
          </ThemeContext.Consumer>
        </nav>
      </div>
    </header>
  );
}
