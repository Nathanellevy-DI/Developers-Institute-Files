import { useAppDispatch } from '../store/hooks';
import { toggleTodo, removeTodo } from '../store/todoSlice';
import type { Todo } from '../store/todoSlice';
import './TodoItem.css';

interface TodoItemProps {
    todo: Todo;
}

// Step 3: TodoItem Component
export function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content" onClick={handleToggle}>
                <span className="checkbox">{todo.completed ? '✓' : ''}</span>
                <span className="todo-text">{todo.text}</span>
            </div>
            <button onClick={handleRemove} className="remove-btn">
                ✕
            </button>
        </li>
    );
}
