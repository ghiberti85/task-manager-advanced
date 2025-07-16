import { useState, useReducer, useEffect } from "react";
import { taskReducer, initialState } from "../reducers/taskReducer";
import type { Task } from "../types/types";

/**
 * useTasks
 *   - Hook customizado que gerencia o estado das tasks via useReducer
 *   - Simula um fetch inicial com loading/erro usando useState + useEffect
 */
export function useTasks() {
  // useReducer para centralizar a lógica de CRUD de tarefas
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // useState para controlar "loading" e "error"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    /// Sempre que o componente monta, inicia o fetch simulado
    setLoading(true);
    setError(false);

    const timer = setTimeout(() => {
      // simula 10% de erro
      if (Math.random() < 0.1) {
        setError(true);
      } else {
        // Dispara INIT para popular o state com dado simulado
        const mock: Task[] = [
          {
            id: "1",
            title: "Exemplo inicial",
            done: false,
            priority: "medium",
          },
        ];
        dispatch({ type: "INIT", payload: mock });
      }
      setLoading(false); // termina loading
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // [] garante que o efeito rode só na montagem

  return { state, dispatch, loading, error };
}
