import type { FilterType } from '../context/TaskContext';
import { useTaskContext } from '../context/TaskContext';
import './TaskFilter.css';

export function TaskFilter() {
    const { state, dispatch } = useTaskContext();

    const filters: { type: FilterType; label: string; icon: string }[] = [
        { type: 'all', label: 'All', icon: '📋' },
        { type: 'active', label: 'Active', icon: '⏳' },
        { type: 'completed', label: 'Completed', icon: '✅' },
    ];

    const handleFilterChange = (filter: FilterType) => {
        dispatch({ type: 'SET_FILTER', payload: filter });
    };

    return (
        <div className="filter-container">
            <span className="filter-label">Filter:</span>
            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        key={filter.type}
                        onClick={() => handleFilterChange(filter.type)}
                        className={`filter-btn ${state.filter === filter.type ? 'active' : ''}`}
                    >
                        <span className="filter-icon">{filter.icon}</span>
                        <span className="filter-text">{filter.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
