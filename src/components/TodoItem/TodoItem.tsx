import React from "react";
import { Todo } from "../../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
