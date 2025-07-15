// src/components/TaskManager.tsx

import type { JSX } from "react";
import { useRef, useMemo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TaskInput from "./TaskInput";
import type { TaskInputHandle } from "./TaskInput";
import TaskList from "./TaskList";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTasks } from "../hooks/useTasks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTheme } from "../hooks/useTheme";
import type { Task } from "../types/types";

export default function TaskManager(): JSX.Element {
  const { t } = useTranslation();
  const { state, dispatch, loading, error } = useTasks();
  const [, setStored] = useLocalStorage<Task[]>("tasks", state.tasks);
  const inputRef = useRef<TaskInputHandle>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    setStored(state.tasks);
  }, [state.tasks, setStored]);

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

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}</p>;

  return (
    <section className="manager">
      <header className="manager__header">
        <h1>{t("title")}</h1>

        {/* trocar tema e idioma lado a lado */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn-toggle" onClick={toggle}>
            {theme === "light" ? (
              <>
                <span aria-hidden>☀️</span> {t("theme.light")}
              </>
            ) : (
              <>
                <span aria-hidden>🌙</span> {t("theme.dark")}
              </>
            )}
          </button>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="manager__controls">
        <TaskInput
          ref={inputRef}
          onAdd={handleAdd}
          placeholder={t("placeholder")}
        />
        <button className="btn-focus" onClick={() => inputRef.current?.focus()}>
          {t("focus")}
        </button>
      </div>

      <div className="task-section">
        <h2>
          {t("sections.active")} <span>({activeTasks.length})</span>
        </h2>
        <TaskList
          tasks={activeTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>

      <div className="task-section">
        <h2>
          {t("sections.done")} <span>({doneTasks.length})</span>
        </h2>
        <TaskList
          tasks={doneTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
}
