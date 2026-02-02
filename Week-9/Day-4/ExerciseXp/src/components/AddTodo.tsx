import { useState, useRef, useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTodo } from '../store/todoSlice';
import './AddTodo.css';

// Step 3: AddTodo Component
export function AddTodo() {
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text.trim()));
            setText('');
            inputRef.current?.focus();
        }
    };

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                className="todo-input"
            />
            <button type="submit" className="add-btn" disabled={!text.trim()}>
                Add Todo
            </button>
        </form>
    );
}
