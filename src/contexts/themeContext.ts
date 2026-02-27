import { createContext, useContext } from "react";
import type { ThemeContextType } from "../types/theme.type";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}