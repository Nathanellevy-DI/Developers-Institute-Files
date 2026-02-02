// Exercise 2: Greeting Component with TypeScript
// This component demonstrates how to define and enforce types for props using TypeScript interfaces

// Define an interface for the component props
interface GreetingProps {
    name: string;
    messageCount: number;
}

// Create the functional component using the defined props interface
const Greeting: React.FC<GreetingProps> = ({ name, messageCount }) => {
    return (
        <div className="greeting-card">
            <h2>👋 Hello, {name}!</h2>
            <p>
                You have <strong>{messageCount}</strong> new message{messageCount !== 1 ? 's' : ''}
            </p>
            {messageCount > 0 && (
                <span className="notification-badge">{messageCount}</span>
            )}
        </div>
    );
};

export default Greeting;
