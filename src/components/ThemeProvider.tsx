"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isLoaded, setIsLoaded] = useState(false); // Track if theme is loaded

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(storedTheme);
    setIsLoaded(true);
  }, []);

  // Update CSS variables when theme changes
  useEffect(() => {
    if (isLoaded) {
      // Update the global background and foreground
      document.documentElement.style.setProperty("--background", theme === "dark" ? "#0a0a0a" : "#ebeaea");
      document.documentElement.style.setProperty("--foreground", theme === "dark" ? "#ededed" : "#171717");

      // Update card specific colors
      document.documentElement.style.setProperty("--card-background", theme === "dark" ? "#1f2937" : "#e2e8f0");
      document.documentElement.style.setProperty("--card-desc-text", theme === "dark" ? "#99a1af" : "#1a202c");
      document.documentElement.style.setProperty("--tag-background", theme === "dark" ? "#2a3545" : "#808894");

      // Update searchbar
      document.documentElement.style.setProperty("--searchbar-background", theme === "dark" ? "#1e2939" : "#f6f4f4");
      document.documentElement.style.setProperty("--searchbar-text", theme === "dark" ? "#e0e0e0" : "#171717");

      // Update footer
      document.documentElement.style.setProperty("--footer-background", theme === "dark" ? "#2D2D2D" : "#E9ECEF");
      document.documentElement.style.setProperty("--footer-text", theme === "dark" ? "#e0e0e0" : "#171717");
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLoaded]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  if (!isLoaded) return null; // Don't render children until theme is loaded

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
