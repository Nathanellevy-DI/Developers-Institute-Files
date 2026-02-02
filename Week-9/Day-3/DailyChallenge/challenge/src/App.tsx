import './App.css'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hook.ts";
import { addToDo, removeToDo, toggleToDo } from "./todo-reducer.ts";


function App() {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");

    const todos = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();

    return (
        <div>
            <input value={text} onChange={(event) => setText(event.target.value)} />
            <input value={day} onChange={(event) => setDay(event.target.value)} />

            <button
                onClick={() => {
                    if (!text.trim()) return;
                    dispatch(addToDo({ text: text.trim(), day: day.trim() }));
                    setText("");
                }}
            >
                Add
            </button>

            <ul>
                {Object.keys(todos.todosByDay).map((date) => (
                    <li key={date}>
                        <ul>
                            {(todos.todosByDay[date]) && todos.todosByDay[date].map(todo => (
                                <li key={todo.id}>
                                    <label style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                                        <input
                                            type="checkbox"
                                            checked={todo.done}
                                            onChange={() => dispatch(toggleToDo({ day: date, id: todo.id }))}
                                        />
                                        {todo.name}
                                    </label>

                                    <button onClick={() => dispatch(removeToDo({ day: date, id: todo.id }))}>X</button>
                                </li>
                            ))}
                        </ul>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
