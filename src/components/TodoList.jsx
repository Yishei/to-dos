import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
            <ul>
      {todos.map((todo, index) => (
        <li key={index}>
            <Todo index={index} todo={todo} todos={todos} setTodos={setTodos}/>
        </li>
      ))}
    </ul>
    <AddTodo todos={todos} setTodos={setTodos}/>
    </div>

  );
}

export default TodoList;
