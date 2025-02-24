import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ITodo } from "./types/types";

import "./App.css";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { AddTodo } from "./components/AddTodo/AddTodo";

function App(): React.FC {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: uuidv4(), text: "Покормить кота ", completed: false },
    { id: uuidv4(), text: "Поиграть с котом", completed: true },
    { id: uuidv4(), text: "Помыть кота", completed: false },
  ]);

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

  return (
    <div className="todo-app">
      <h1>todos</h1>
      <AddTodo addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
