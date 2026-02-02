// Exercise 3: Counter Component with useState Hook and TypeScript
// This component demonstrates how to type the useState hook using TypeScript

import { useState } from 'react';

// Define a type for the possible actions
type ActionType = 'increment' | 'decrement' | 'reset' | null;

const Counter: React.FC = () => {
    // Type the useState hooks explicitly
    const [count, setCount] = useState<number>(0);
    const [lastAction, setLastAction] = useState<ActionType>(null);

    // Increment function with proper typing
    const handleIncrement = (): void => {
        setCount((prevCount: number) => prevCount + 1);
        setLastAction('increment');
    };

    // Decrement function with proper typing
    const handleDecrement = (): void => {
        setCount((prevCount: number) => prevCount - 1);
        setLastAction('decrement');
    };

    // Reset function with proper typing
    const handleReset = (): void => {
        setCount(0);
        setLastAction('reset');
    };

    // Helper function to get action display text
    const getActionText = (): string => {
        switch (lastAction) {
            case 'increment':
                return '⬆️ Incremented';
            case 'decrement':
                return '⬇️ Decremented';
            case 'reset':
                return '🔄 Reset';
            default:
                return 'No action yet';
        }
    };

    return (
        <div className="counter-card">
            <h2>🔢 Counter</h2>
            <div className="counter-display">
                <span className="count-value">{count}</span>
            </div>
            <div className="counter-buttons">
                <button onClick={handleDecrement} className="btn btn-decrement">
                    − Decrement
                </button>
                <button onClick={handleReset} className="btn btn-reset">
                    Reset
                </button>
                <button onClick={handleIncrement} className="btn btn-increment">
                    + Increment
                </button>
            </div>
            <p className="last-action">
                Last action: <strong>{getActionText()}</strong>
            </p>
        </div>
    );
};

export default Counter;
