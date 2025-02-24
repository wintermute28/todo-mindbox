import React, { useState } from "react";

import { IAddTodoProps } from "../../types/types";

export const AddTodo: React.FC<IAddTodoProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
};
