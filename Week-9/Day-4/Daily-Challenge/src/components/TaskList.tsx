import { useAppSelector } from '../store/hooks';
import { TaskItem } from './TaskItem';
import './TaskList.css';

export function TaskList() {
    const selectedDate = useAppSelector((state) => state.tasks.selectedDate);
    const tasks = useAppSelector(
        (state) => state.tasks.tasksByDate[selectedDate] || []
    );

    const completedCount = tasks.filter((t) => t.completed).length;
    const activeCount = tasks.filter((t) => !t.completed).length;

    return (
        <div className="task-list-container">
            <div className="task-stats">
                <span className="stat">📋 Total: {tasks.length}</span>
                <span className="stat completed">✅ Done: {completedCount}</span>
                <span className="stat active">⏳ Pending: {activeCount}</span>
            </div>

            {tasks.length === 0 ? (
                <div className="empty-state">
                    <p>📝 No tasks for this day. Add your first task!</p>
                </div>
            ) : (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </div>
    );
}
