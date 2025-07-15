// src/hooks/useTheme.ts

import { useContext } from "react";
import { ThemeContext } from "../context/theme";

/**
 * Hook para ler o tema.
 * Se não for usado dentro de <ThemeProvider>, lança erro.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return ctx;
}
