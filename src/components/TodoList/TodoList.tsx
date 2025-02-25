import { TodoItem } from "../TodoItem/TodoItem";

import { ITodoListProps } from "../../types/types";

import "./TodoList.css";

export const TodoList: React.FC<ITodoListProps> = ({
  filteredTodos,
  toggleTodo,
}) => {
  return (
    <ul className="todo-list">
      {filteredTodos.length === 0 && <p>It's still empty here...</p>}
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
