import { useTaskContext } from '../context/TaskContext';
import { TaskItem } from './TaskItem';
import './TaskList.css';

export function TaskList() {
    const { filteredTasks, state } = useTaskContext();

    const getEmptyMessage = () => {
        switch (state.filter) {
            case 'active':
                return '🎉 All tasks are completed! Great job!';
            case 'completed':
                return '📝 No completed tasks yet. Keep working!';
            default:
                return '📋 No tasks yet. Add your first task!';
        }
    };

    return (
        <div className="task-list-container">
            <div className="task-stats">
                <span className="stat">
                    📊 Total: {state.tasks.length}
                </span>
                <span className="stat completed-stat">
                    ✅ Completed: {state.tasks.filter(t => t.completed).length}
                </span>
                <span className="stat active-stat">
                    ⏳ Active: {state.tasks.filter(t => !t.completed).length}
                </span>
            </div>

            {filteredTasks.length === 0 ? (
                <div className="empty-state">
                    <p>{getEmptyMessage()}</p>
                </div>
            ) : (
                <ul className="task-list">
                    {filteredTasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </div>
    );
}
