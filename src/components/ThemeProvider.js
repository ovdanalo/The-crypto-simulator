import React, { useState } from "react";
import ThemeContext from "./ThemeContext";



const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkTheme(prevState => !prevState);
    };
  
    return (
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider;