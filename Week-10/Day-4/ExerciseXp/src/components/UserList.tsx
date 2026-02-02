// Exercise 5: UserList Component with useEffect Hook and TypeScript
// This component demonstrates how to fetch data from an API using useEffect with proper TypeScript typing

import { useState, useEffect } from 'react';

// Define User interface for API data
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
    };
}

// Define state types
interface UserListState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const UserList: React.FC = () => {
    // Type the state using the interface
    const [state, setState] = useState<UserListState>({
        users: [],
        loading: true,
        error: null,
    });

    // useEffect to fetch data when component mounts
    useEffect(() => {
        const fetchUsers = async (): Promise<void> => {
            try {
                // Set loading state
                setState((prev) => ({ ...prev, loading: true, error: null }));

                // Fetch data from the API
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                // Check if response is ok
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON response with proper typing
                const data: User[] = await response.json();

                // Update state with fetched data
                setState({
                    users: data,
                    loading: false,
                    error: null,
                });
            } catch (err) {
                // Handle errors properly
                const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
                setState({
                    users: [],
                    loading: false,
                    error: errorMessage,
                });
            }
        };

        // Call the fetch function
        fetchUsers();
    }, []); // Empty dependency array - only run on mount

    // Destructure state for easier access
    const { users, loading, error } = state;

    // Render loading state
    if (loading) {
        return (
            <div className="user-list-container">
                <h2>👥 User List</h2>
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Loading users...</p>
                </div>
            </div>
        );
    }

    // Render error state
    if (error) {
        return (
            <div className="user-list-container">
                <h2>👥 User List</h2>
                <div className="error-state">
                    <span className="error-icon">⚠️</span>
                    <p>Error: {error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="retry-btn"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // Render user list
    return (
        <div className="user-list-container">
            <h2>👥 User List</h2>
            <p className="user-count">Fetched {users.length} users from API</p>
            <div className="user-grid">
                {users.map((user: User) => (
                    <div key={user.id} className="user-item">
                        <div className="user-header">
                            <div className="user-avatar-small">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="user-name">{user.name}</h4>
                                <span className="user-username">@{user.username}</span>
                            </div>
                        </div>
                        <div className="user-details">
                            <p><span className="detail-label">📧</span> {user.email}</p>
                            <p><span className="detail-label">📞</span> {user.phone}</p>
                            <p><span className="detail-label">🌐</span> {user.website}</p>
                            <p><span className="detail-label">🏢</span> {user.company.name}</p>
                            <p><span className="detail-label">📍</span> {user.address.city}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
