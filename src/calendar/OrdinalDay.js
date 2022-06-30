import TodoItem from "./TodoItem";
import { useState } from "react";

const DAY_WIDTH = 300;

export default function OrdinalDay({ index, todos, onAddTodo, onToggleTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div
      className="flex flex-col h-full border-l-2 p-4"
      style={{ minWidth: DAY_WIDTH }}
    >
      <div className="flex flex-row justify-center">
        <h2 className="font-bold">Day {index}</h2>
      </div>

      <div className="flex flex-row my-4">
        <input
          className="border-2 rounded-md mr-2 appearance-none w-full px-2 py-1"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      {todos.map((todo) => (
        <TodoItem
          value={todo.value}
          key={todo.id}
          checked={todo.checked}
          onToggleCheckbox={(checked) =>
            onToggleTodo({
              dayIndex: index,
              todoId: todo.id,
              checked,
            })
          }
        />
      ))}
    </div>
  );
}
