// src/context/theme.ts

import { createContext } from "react";

// Apenas constantes / tipos / contexto — sem componentes
export type Theme = "light" | "dark";

export interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

/**
 * Contexto que guarda o tema e a função de toggle.
 * Exportamos só o contexto (não é um componente).
 */
export const ThemeContext = createContext<ThemeCtx | undefined>(undefined);
