import React, { useState } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

export default function Header() {
  function toggleMenuMobil() {
    document.querySelector("#menu").classList.toggle("menu-hidden");
    if (document.querySelector("#toggle-menu-mobile").innerHTML === "✕") {
      document.querySelector("#toggle-menu-mobile").innerHTML = "☰";
    } else {
      document.querySelector("#toggle-menu-mobile").innerHTML = "✕";
    }
  }
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="sticky">
      <span onClick={toggleMenuMobil} id="toggle-menu-mobile">
        ☰
      </span>
      <div id="menu" className="menu-hidden">
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
                  {/* {darkMode ? "day mode" : "night mode"} */}
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
