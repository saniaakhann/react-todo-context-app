import { useTodo } from "./contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  const { todos } = useTodo();

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start py-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center mb-5">
          Todo App
        </h1>

        <TodoForm />

        <div className="mt-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;