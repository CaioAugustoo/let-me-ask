import { useCallback, useEffect, useState } from "react";

const LOCALSTORAGE_THEME = "@letmeask:THEME";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const themeInLocalstorage = localStorage.getItem(LOCALSTORAGE_THEME);

    if (!themeInLocalstorage) return "light";
    return themeInLocalstorage;
  });

  const changeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_THEME, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, changeTheme };
};
