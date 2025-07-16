import { useRef, useLayoutEffect } from "react";
import type { Task } from "../types/types";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * TaskList
 * useLayoutEffect para medir DOM antes da pintura (se precisar animar/ajustar scroll)
 */
export default function TaskList({ tasks, onToggle, onDelete }: Props) {
  const listRef = useRef<HTMLUListElement>(null);

  // useLayoutEffect roda antes da pintura, ideal para medições DOM
  useLayoutEffect(() => {
    // exemplo: ajustar scroll ou registrar altura
    console.log("Altura da lista:", listRef.current?.offsetHeight);
  }, [tasks]);

  return (
    <ul ref={listRef}>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
