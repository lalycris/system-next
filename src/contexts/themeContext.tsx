import { type } from "os";
import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const defaultThemeValues: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeValues);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
