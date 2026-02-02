import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUsers, clearUsers } from '../store/userSlice';
import { UserCard } from './UserCard';
import './UserData.css';

// Step 4 & 5: UserData Component with Redux connection
export function UserData() {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector((state) => state.users);

    // Fetch users on component mount
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchUsers());
    };

    const handleClear = () => {
        dispatch(clearUsers());
    };

    return (
        <div className="user-data-container">
            <div className="controls">
                <button onClick={handleRefresh} className="btn refresh-btn" disabled={loading}>
                    {loading ? '⏳ Loading...' : '🔄 Fetch Users'}
                </button>
                <button onClick={handleClear} className="btn clear-btn" disabled={loading || users.length === 0}>
                    🗑️ Clear
                </button>
            </div>

            <div className="status-bar">
                <span className="status-item">
                    👥 Users: {users.length}
                </span>
                {loading && <span className="status-item loading">Loading...</span>}
            </div>

            {/* Error State */}
            {error && (
                <div className="error-message">
                    <span>❌ Error: {error}</span>
                    <button onClick={handleRefresh} className="retry-btn">Retry</button>
                </div>
            )}

            {/* Loading State */}
            {loading && users.length === 0 && (
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Fetching user data from API...</p>
                </div>
            )}

            {/* Empty State */}
            {!loading && !error && users.length === 0 && (
                <div className="empty-state">
                    <p>📭 No users loaded. Click "Fetch Users" to load data.</p>
                </div>
            )}

            {/* User Grid */}
            {users.length > 0 && (
                <div className="user-grid">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
}
