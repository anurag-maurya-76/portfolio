"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "Light" | "Dark";
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = { theme: Theme; toggleTheme: () => void } | null;
const ThemeContext = createContext<ThemeContextType>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("Light");
  const toggleTheme = () => {
    if (theme == "Light") {
      setTheme("Dark");
      window.localStorage.setItem("Theme", "Dark");
    } else {
      setTheme("Light");
      window.localStorage.setItem("Theme", "Light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("Theme");
    if (localTheme) {
      if (localTheme === "Light") {
        setTheme("Light");
      } else if (localTheme === "Dark") {
        setTheme("Dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("Dark");
    }
  }, []);
  useEffect(() => {
    if (theme === "Dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context == null) {
    throw new Error("useTheme must be used within a theme context provider");
  }
  return context;
}
