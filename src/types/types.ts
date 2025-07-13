// task-manager-advanced/src/types.ts
// This file defines the types used in the task manager application.

export interface Task {
  id: string;
  title: string;
  done: boolean;
  priority: "low" | "medium" | "high";
}
