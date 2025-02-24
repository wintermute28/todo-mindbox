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
