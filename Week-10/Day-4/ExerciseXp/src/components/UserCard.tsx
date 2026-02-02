// Exercise 4: UserCard Component with Optional Props
// This component demonstrates how to define an interface with optional props in TypeScript

// Define interface with optional props (marked with ?)
interface UserCardProps {
    name?: string;
    age?: number;
    role?: string;
}

// Define default values for optional props
const defaultProps: Required<UserCardProps> = {
    name: 'Anonymous User',
    age: 0,
    role: 'Guest',
};

const UserCard: React.FC<UserCardProps> = (props) => {
    // Merge provided props with default values
    const { name, age, role } = { ...defaultProps, ...props };

    // Determine avatar initial from name
    const getInitial = (): string => {
        return name.charAt(0).toUpperCase();
    };

    // Get role badge color based on role
    const getRoleBadgeClass = (): string => {
        switch (role.toLowerCase()) {
            case 'admin':
                return 'role-admin';
            case 'developer':
                return 'role-developer';
            case 'designer':
                return 'role-designer';
            case 'manager':
                return 'role-manager';
            default:
                return 'role-guest';
        }
    };

    return (
        <div className="user-card">
            <div className="user-avatar">
                {getInitial()}
            </div>
            <div className="user-info">
                <h3 className="user-name">{name}</h3>
                {age > 0 && <p className="user-age">Age: {age}</p>}
                <span className={`role-badge ${getRoleBadgeClass()}`}>
                    {role}
                </span>
            </div>
        </div>
    );
};

export default UserCard;
