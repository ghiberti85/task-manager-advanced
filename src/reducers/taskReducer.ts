import type { Task } from "../types/types";

export type Action =
  | { type: "INIT"; payload: Task[] }
  | { type: "ADD"; payload: Task }
  | { type: "TOGGLE"; payload: { id: string } }
  | { type: "DELETE"; payload: { id: string } };

export interface State {
  tasks: Task[];
}

export const initialState: State = { tasks: [] };

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INIT":
      return { tasks: action.payload };
    case "ADD":
      return { tasks: [...state.tasks, action.payload] };
    case "TOGGLE":
      return {
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, done: !t.done } : t
        ),
      };
    case "DELETE":
      return { tasks: state.tasks.filter((t) => t.id !== action.payload.id) };
    default:
      return state;
  }
}
