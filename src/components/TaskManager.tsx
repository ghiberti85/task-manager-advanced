import React, { useRef, useMemo, useCallback } from "react";
import TaskInput from "./TaskInput";
import type { TaskInputHandle } from "./TaskInput";
import TaskList from "./TaskList";
import { useTasks } from "../hooks/useTasks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTheme } from "../context/ThemeContext";
import type { Task } from "../types/types";

export default function TaskManager() {
  const { state, dispatch, loading, error } = useTasks();
  // guardamos também em localStorage (persistência adicional)
  const [, setStored] = useLocalStorage<Task[]>("tasks", state.tasks);

  const inputRef = useRef<TaskInputHandle>(null);
  const { theme, toggle } = useTheme();

  // sempre que o state mudar, atualiza storage
  React.useEffect(() => {
    setStored(state.tasks);
  }, [state.tasks, setStored]);

  // memorização de lista filtrada: evita recálculo desnecessário
  const activeTasks = useMemo(
    () => state.tasks.filter((t) => !t.done),
    [state.tasks]
  );
  const doneTasks = useMemo(
    () => state.tasks.filter((t) => t.done),
    [state.tasks]
  );

  const handleAdd = useCallback(
    (task: Task) => dispatch({ type: "ADD", payload: task }),
    [dispatch]
  );
  const handleToggle = useCallback(
    (id: string) => dispatch({ type: "TOGGLE", payload: { id } }),
    [dispatch]
  );
  const handleDelete = useCallback(
    (id: string) => dispatch({ type: "DELETE", payload: { id } }),
    [dispatch]
  );

  if (loading) return <p>Carregando tarefas…</p>;
  if (error) return <p>Erro ao carregar tarefas. Tente recarregar.</p>;

  return (
    <div className={`manager theme-${theme}`}>
      <button onClick={toggle}>
        Tema: {theme === "light" ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      <TaskInput ref={inputRef} onAdd={handleAdd} />
      <button onClick={() => inputRef.current?.focus()}>Focar no input</button>

      <h2>Ativas</h2>
      <TaskList
        tasks={activeTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      <h2>Concluídas</h2>
      <TaskList
        tasks={doneTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
