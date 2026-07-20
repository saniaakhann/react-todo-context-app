import { useState } from "react";
import { useTodo } from "./contexts/TodoContext";

function TodoItem({ todo }) {
  const {
    deleteTodo,
    updateTodo,
    toggleComplete,
  } = useTodo();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, {
      ...todo,
      todo: todoMsg,
    });

    setIsTodoEditable(false);
  };

  return (
    <div className="flex items-center gap-3 border rounded p-3 mb-3">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <input
        type="text"
        value={todoMsg}
        disabled={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`flex-1 outline-none ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      />

      <button
        onClick={() => {
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable(true);
          }
        }}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;