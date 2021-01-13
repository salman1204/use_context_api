import React, {useContext} from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

const BookList = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  const themeType = isLightTheme ? light : dark ;

  return (
    <div className="book-list" style={{ color:themeType.syntax, background: themeType.bg}}>
      <ul>
        <li style={{background: themeType.ui}}>the way of kings</li>
        <li style={{background: themeType.ui}}>the name of the wind</li>
        <li style={{background: themeType.ui}}>the final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
