// src/context/ThemeProvider.tsx
import { useState, useCallback, useEffect, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./theme";

/**
 * ThemeProvider
 *   - Componente que envolve a app e provê estado de tema via Context
 *   - useState mantém o tema atual
 *   - useCallback memoiza a função toggle para não regenerar em cada render
 *   - useEffect injeta a classe no <body> para CSS temático
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggle = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }, []);

  // Sempre que mudar o tema, atualiza a classe no <body>
  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
