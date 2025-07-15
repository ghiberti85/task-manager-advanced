import { useState, useReducer, useEffect } from "react";
import { taskReducer, initialState } from "../reducers/taskReducer";
import type { Task } from "../types/types";

/**
 * Hook que simula o fetch inicial de tasks, com loading/erro.
 */
export function useTasks() {
  // estado das tarefas
  const [state, dispatch] = useReducer(taskReducer, initialState);
  // estado de loading/erro
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // toda vez que montar, disparar o "fetch"
    setLoading(true);
    setError(false);

    const timer = setTimeout(() => {
      // simula 10% de erro
      if (Math.random() < 0.1) {
        setError(true);
      } else {
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
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { state, dispatch, loading, error };
}
