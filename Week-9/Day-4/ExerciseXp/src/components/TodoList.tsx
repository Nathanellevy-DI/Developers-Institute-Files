import { useAppSelector } from '../store/hooks';
import { TodoItem } from './TodoItem';
import './TodoList.css';

// Step 3: TodoList Component
export function TodoList() {
    const todos = useAppSelector((state) => state.todos.todos);

    const completedCount = todos.filter((t) => t.completed).length;
    const activeCount = todos.filter((t) => !t.completed).length;

    return (
        <div className="todo-list-container">
            <div className="todo-stats">
                <span className="stat total">📋 Total: {todos.length}</span>
                <span className="stat done">✓ Done: {completedCount}</span>
                <span className="stat pending">○ Pending: {activeCount}</span>
            </div>

            {todos.length === 0 ? (
                <div className="empty-state">
                    <p>🎉 No todos yet! Add your first one above.</p>
                </div>
            ) : (
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}
        </div>
    );
}
