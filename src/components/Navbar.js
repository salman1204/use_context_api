import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  const themeType = isLightTheme ? light : dark ;

  return (
    <nav style={{background:themeType.ui, color:themeType.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
