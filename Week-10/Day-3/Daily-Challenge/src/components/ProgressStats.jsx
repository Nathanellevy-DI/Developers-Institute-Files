import { useSelector } from 'react-redux';
import { selectCompletedTasks, selectTotalTasks, selectOverallProgress } from '../store/tasksSlice';
import './ProgressStats.css';

const ProgressStats = () => {
    const completedTasks = useSelector(selectCompletedTasks);
    const totalTasks = useSelector(selectTotalTasks);
    const overallProgress = useSelector(selectOverallProgress);

    return (
        <div className="progress-stats">
            <h2 className="stats-title">📊 Your Progress</h2>
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                        <span className="stat-value">{completedTasks}</span>
                        <span className="stat-label">Completed</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📋</div>
                    <div className="stat-info">
                        <span className="stat-value">{totalTasks}</span>
                        <span className="stat-label">Total Tasks</span>
                    </div>
                </div>
                <div className="stat-card progress-card">
                    <div className="circular-progress" style={{ '--progress': overallProgress }}>
                        <svg viewBox="0 0 100 100">
                            <circle className="bg" cx="50" cy="50" r="45" />
                            <circle
                                className="progress-ring"
                                cx="50"
                                cy="50"
                                r="45"
                                strokeDasharray={`${overallProgress * 2.83} 283`}
                            />
                        </svg>
                        <span className="progress-text">{overallProgress}%</span>
                    </div>
                    <span className="stat-label">Overall Progress</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressStats;
