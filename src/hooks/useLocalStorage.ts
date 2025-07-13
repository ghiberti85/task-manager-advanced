import { useState, useEffect, useDebugValue } from "react";

/**
 * Hook para sincronizar um estado com o localStorage.
 * @param key chave no storage
 * @param init valor inicial
 */
export function useLocalStorage<T>(key: string, init: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : init;
  });

  // Exibe o valor no React DevTools
  useDebugValue(value);

  // Toda vez que mudar value, sincroniza no localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
