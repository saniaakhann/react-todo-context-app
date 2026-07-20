
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);