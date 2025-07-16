// src/hooks/useTheme.ts

import { useContext } from "react";
import { ThemeContext } from "../context/theme";

/**
 * Hook para ler o tema.
 * Hook simples para obter { theme, toggle } do Contexto
 * Garante que o ContextProvider esteja presente
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return ctx;
}
