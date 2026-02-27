import { createContext, useContext } from "react";
import type { ContextsType } from "../types/contexts.type";

// Contexts
export const Contexts = createContext<ContextsType | undefined>(undefined);

export function useContexts() {
  const context = useContext(Contexts);
  if (!context) {
    throw new Error("useFilterContext must be used inside ThemeProvider");
  }
  return context;
}