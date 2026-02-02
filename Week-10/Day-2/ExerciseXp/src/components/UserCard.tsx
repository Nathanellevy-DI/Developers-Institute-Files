import type { User } from '../store/userSlice';
import './UserCard.css';

interface UserCardProps {
    user: User;
}

// Step 4: Component for individual user display
export function UserCard({ user }: UserCardProps) {
    return (
        <div className="user-card">
            <div className="user-header">
                <div className="avatar">
                    {user.name.charAt(0)}
                </div>
                <div className="user-info">
                    <h3 className="user-name">{user.name}</h3>
                    <span className="username">@{user.username}</span>
                </div>
            </div>

            <div className="user-details">
                <div className="detail-row">
                    <span className="icon">📧</span>
                    <span>{user.email}</span>
                </div>
                <div className="detail-row">
                    <span className="icon">📞</span>
                    <span>{user.phone}</span>
                </div>
                <div className="detail-row">
                    <span className="icon">🌐</span>
                    <span>{user.website}</span>
                </div>
                <div className="detail-row">
                    <span className="icon">🏢</span>
                    <span>{user.company.name}</span>
                </div>
                <div className="detail-row">
                    <span className="icon">📍</span>
                    <span>{user.address.city}</span>
                </div>
            </div>
        </div>
    );
}
