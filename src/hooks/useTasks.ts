import { useReducer, useEffect } from "react";
import { taskReducer, initialState } from "../reducers/taskReducer";
import type { Task } from "../types/types";

/**
 * Hook que simula o fetch inicial de tasks, com loading/erro.
 */
export function useTasks() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [loading, setLoading] = useReducer((l) => !l, true);
  const [error, setError] = useReducer((e) => !e, false);

  // Simula fetch de tasks externas
  useEffect(() => {
    setLoading(); // loading = true
    const timer = setTimeout(() => {
      if (Math.random() < 0.1) {
        setError(); // erro com 10% de chance
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
      setLoading(); // loading = false
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, setLoading, setError]);

  return { state, dispatch, loading, error };
}
