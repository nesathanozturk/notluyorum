"use client";

import { createContext, useState } from "react";

import { ITheme } from "@/types";

const ThemeContext = createContext<ITheme | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(false);

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  const valueToShare = {
    theme,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={valueToShare}>
      <main className={theme ? "dark" : ""}>{children}</main>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
