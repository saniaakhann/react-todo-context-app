import { useState } from "react";
import { useTodo } from "./contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({
      id: Date.now(),
      todo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter a task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;