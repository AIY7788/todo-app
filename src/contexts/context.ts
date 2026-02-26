import { createContext, useContext } from "react";
import type { ThemeContextType } from "../types/theme.type";
import type { FilterContextType } from "../types/filter.type";

// Theme context
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

// Filter context
export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used inside ThemeProvider");
  }
  return context;
}