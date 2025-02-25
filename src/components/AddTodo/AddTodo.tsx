import { useState } from "react";

import { IAddTodoProps } from "../../types/types";

import "./AddTodo.css";

export const AddTodo: React.FC<IAddTodoProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewTodo();
  };

  const addNewTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
};
