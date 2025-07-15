import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  FormEvent,
} from "react";
import type { Task } from "../types/types";
import { v4 as uuid } from "uuid";

export interface TaskInputHandle {
  focus: () => void;
}

interface Props {
  onAdd: (task: Task) => void;
}

const TaskInput = forwardRef<TaskInputHandle, Props>(({ onAdd }, ref) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("low");
  const inputRef = useRef<HTMLInputElement>(null);

  // expõe o método focus ao componente pai
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus()!,
  }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ id: uuid(), title, done: false, priority });
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as any)}
      >
        <option value="low">⬇️ Baixa</option>
        <option value="medium">➡️ Média</option>
        <option value="high">⬆️ Alta</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
});

export default TaskInput;
