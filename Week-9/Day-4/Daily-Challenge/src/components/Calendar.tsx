import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedDate } from '../store/tasksSlice';
import './Calendar.css';

export function Calendar() {
    const dispatch = useAppDispatch();
    const selectedDate = useAppSelector((state) => state.tasks.selectedDate);
    const tasksByDate = useAppSelector((state) => state.tasks.tasksByDate);

    // Generate dates for the current week + next week
    const getDates = () => {
        const dates: Date[] = [];
        const today = new Date();
        // Start from 3 days ago
        for (let i = -3; i <= 10; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    const getDayName = (date: Date): string => {
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    const getDayNumber = (date: Date): number => {
        return date.getDate();
    };

    const getMonthName = (date: Date): string => {
        return date.toLocaleDateString('en-US', { month: 'short' });
    };

    const isToday = (date: Date): boolean => {
        const today = new Date();
        return formatDate(date) === formatDate(today);
    };

    const getTaskCount = (date: Date): number => {
        const dateStr = formatDate(date);
        return tasksByDate[dateStr]?.length || 0;
    };

    const handleDateClick = (date: Date) => {
        dispatch(setSelectedDate(formatDate(date)));
    };

    const dates = getDates();

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2>📅 {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</h2>
            </div>
            <div className="calendar-scroll">
                <div className="calendar-dates">
                    {dates.map((date) => {
                        const dateStr = formatDate(date);
                        const taskCount = getTaskCount(date);
                        return (
                            <button
                                key={dateStr}
                                className={`date-item ${selectedDate === dateStr ? 'selected' : ''} ${isToday(date) ? 'today' : ''}`}
                                onClick={() => handleDateClick(date)}
                            >
                                <span className="day-name">{getDayName(date)}</span>
                                <span className="day-number">{getDayNumber(date)}</span>
                                <span className="month-name">{getMonthName(date)}</span>
                                {taskCount > 0 && (
                                    <span className="task-badge">{taskCount}</span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
