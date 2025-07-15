import { memo, useCallback } from "react";
import type { Task } from "../types/types";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = memo(function TaskItem({ task, onToggle, onDelete }: Props) {
  const handleToggle = useCallback(
    () => onToggle(task.id),
    [onToggle, task.id]
  );
  const handleDelete = useCallback(
    () => onDelete(task.id),
    [onDelete, task.id]
  );

  return (
    <li className="task-item">
      <label className="task-item__toggle">
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleToggle}
          aria-label={
            task.done ? "Marcar como não concluída" : "Marcar como concluída"
          }
        />
        <span className="task-item__checkmark" />
      </label>
      <span
        className={
          "task-item__title" + (task.done ? " task-item__title--done" : "")
        }
      >
        [{task.priority}] {task.title}
      </span>
      <button
        className="task-item__delete"
        onClick={handleDelete}
        aria-label="Remover tarefa"
      >
        {/* SVG de X para melhor contraste */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </li>
  );
});

export default TaskItem;
