// src/components/TaskInput.tsx

import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import type { FormEvent } from "react"; // import type-only
import type { Task } from "../types/types";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

export interface TaskInputHandle {
  focus: () => void;
}

interface Props {
  onAdd: (task: Task) => void;
  placeholder?: string;
}

export default forwardRef<TaskInputHandle, Props>(function TaskInput(
  { onAdd },
  ref
) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("low");
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ id: uuid(), title: title.trim(), done: false, priority });
    setTitle("");
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="visually-hidden">
        Nova tarefa
      </label>
      <input
        id="new-task"
        ref={inputRef}
        className="task-input__field"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="O que você precisa fazer?"
        aria-label="Título da nova tarefa"
        required
      />

      <label htmlFor="task-priority" className="visually-hidden">
        Prioridade
      </label>
      <select
        id="task-priority"
        className="task-input__select"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Task["priority"])}
        aria-label="Selecione a prioridade"
      >
        <option value="low">Baixa</option>
        <option value="medium">Média</option>
        <option value="high">Alta</option>
      </select>

      <button
        type="submit"
        className="task-input__button"
        aria-label="Adicionar tarefa"
      >
        {t("add")}
      </button>
    </form>
  );
});
