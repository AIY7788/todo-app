import { useEffect, useMemo, useState } from "react";
import type { Theme } from "../types/theme.type";
import { FilterContext, ThemeContext } from "./context";
import type { Filter } from "../types/filter.type";
import { todoDB } from "../data/todoLists";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light",
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => prev === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// FilterProvider
export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredData = useMemo(() => {
    switch (filter) {
      case "all":
        return todoDB;
      case "active":
        return todoDB.filter((item) => item.isActive);
      case "completed":
        return todoDB.filter((item) => item.completed);
      default:
        return todoDB;
    }
  }, [filter]);

  return (
    <FilterContext.Provider value={{ filter, filteredData, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};