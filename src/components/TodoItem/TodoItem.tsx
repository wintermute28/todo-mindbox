import { ITodoItemProps } from "../../types/types";

import "./TodoItem.css";

export const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  text,
  completed,
  toggleTodo,
}) => (
  <li className="todo-item">
    <div className="checkbox-wrapper-31">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <svg viewBox="0 0 35.6 35.6">
        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline
          className="check"
          points="11.78 18.12 15.55 22.23 25.17 12.87"
        ></polyline>
      </svg>
    </div>
    <span style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}
    </span>
  </li>
);

{
  /* // export const TodoItem: React.FC<ITodoItemProps> = ({
    id,
    text,
    completed,
    toggleTodo,
  }) => (
    <div classNameName="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
    </div>
  ); */
}
