"use client";

import { useThemeContext } from "@/context/ThemeContext";

import { ITheme } from "@/types";

const Toggle = () => {
  const { theme, handleThemeChange } = useThemeContext() as ITheme;

  return (
    <>
      <input
        data-theme={theme === true ? "dark" : "light"}
        type="checkbox"
        className="toggle"
        onClick={handleThemeChange}
      />
    </>
  );
};

export default Toggle;
