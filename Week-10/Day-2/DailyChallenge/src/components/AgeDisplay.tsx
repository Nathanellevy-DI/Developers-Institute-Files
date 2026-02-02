import { useAppSelector } from '../store/hooks';
import './AgeDisplay.css';

// Step 4: AgeDisplay Component
export function AgeDisplay() {
    const { age, loading } = useAppSelector((state) => state.age);

    return (
        <div className="age-display">
            <div className="age-container">
                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                    </div>
                )}
                <div className="age-number">{age}</div>
                <div className="age-label">Years Old</div>
            </div>
        </div>
    );
}
