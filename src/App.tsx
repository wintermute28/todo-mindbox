import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AddTodo } from "./components/AddTodo/AddTodo";
import { FilterTodo } from "./components/FilterTodo/FilterTodo";
import { TodoList } from "./components/TodoList/TodoList";

import { ITodo } from "./types/types";

import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: uuidv4(), text: "Покормить кота", completed: false },
    { id: uuidv4(), text: "Поиграть с котом", completed: true },
    { id: uuidv4(), text: "Помыть кота", completed: false },
  ]);
  const [filter, setFilter] = useState<string>("all");

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text: string) => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1>todos</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList filteredTodos={filteredTodos} toggleTodo={toggleTodo} />
      <FilterTodo
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
        itemsLeft={itemsLeft}
      />
    </div>
  );
};

export default App;
