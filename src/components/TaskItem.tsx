import React, { memo, useCallback } from "react";
import type { Task } from "../types/types";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// memo evita re-renderes desnecessários se props não mudam
const TaskItem = memo(({ task, onToggle, onDelete }: Props) => {
  const handleToggle = useCallback(
    () => onToggle(task.id),
    [onToggle, task.id]
  );
  const handleDelete = useCallback(
    () => onDelete(task.id),
    [onDelete, task.id]
  );

  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={handleToggle} />
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        [{task.priority}] {task.title}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
});

export default TaskItem;
