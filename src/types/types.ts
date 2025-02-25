export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  toggleTodo: (id: string) => void;
}

export interface IAddTodoProps {
  addTodo: (text: string) => void;
}

export interface IFilterTodoProps {
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
  itemsLeft: number;
}

export interface ITodoListProps {
  filteredTodos: ITodo[];
  toggleTodo: (id: string) => void;
}
