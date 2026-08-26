"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setIsDark(saved ? saved === "dark" : true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return { isDark, toggleTheme };
};
