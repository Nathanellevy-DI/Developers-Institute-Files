import './App.css'
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "./hook.ts";
import { addToDo, removeToDo, toggleToDo } from "./todo-reducer";


function App() {
    const [text, setText] = useState("");
    const todos = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();

  return (
      <div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button
              onClick={() => {
                  if (!text.trim()) return;
                  dispatch(addToDo(text.trim()));
                  setText("");
              }}
          >
              Add
          </button>

          <ul>
              {todos.map((todo) => (
                  <li key={todo.id}>
                      <label style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                          <input
                              type="checkbox"
                              checked={todo.done}
                              onChange={() => dispatch(toggleToDo(todo.id))}
                          />
                          {todo.name}
                      </label>

                      <button onClick={() => dispatch(removeToDo(todo.id))}>X</button>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default App
