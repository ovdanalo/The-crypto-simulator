import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";


const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => {
      const newTheme = !prevState;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };
    
    return (
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider;