// src/App.tsx
import type { JSX } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import TaskManager from "./components/TaskManager";

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="app-container">
        <TaskManager />
      </div>
    </ThemeProvider>
  );
}
