import { IFilterTodoProps } from "../../types/types";

import "./FilterTodo.css";

export const FilterTodo: React.FC<IFilterTodoProps> = ({
  filter,
  setFilter,
  clearCompleted,
  itemsLeft,
}) => (
  <div className="filters">
    <span>{itemsLeft} items left</span>

    <div className="filter-buttons">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>

    <button onClick={clearCompleted}>Clear completed</button>
  </div>
);
