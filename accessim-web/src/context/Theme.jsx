import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case "light":
        element.classList.remove("dark");
        break;
      case "dark":
        element.classList.add("dark");
        break;
      default:
        break;
    }
  }, [element.classList, theme]);

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    //Cambiar icono del sol por el de la luna
    const icon = document.querySelector("ion-icon");
    if (theme === "dark") {
      icon.name = "sunny";
    } else {
      icon.name = "moon";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
