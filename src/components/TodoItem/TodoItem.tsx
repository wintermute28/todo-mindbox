import React from "react";
import { ITodoItemProps } from "../../types/types";

export const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  text,
  completed,
  toggleTodo,
}) => (
  <div className="todo-item">
    <input
      type="checkbox"
      checked={completed}
      onChange={() => toggleTodo(id)}
    />
    <span style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}
    </span>
  </div>
);
