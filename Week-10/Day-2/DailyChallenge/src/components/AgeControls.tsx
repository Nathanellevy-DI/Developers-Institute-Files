import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ageUpAsync, ageDownAsync } from '../store/ageSlice';
import './AgeControls.css';

// Step 4: AgeControls Component
export function AgeControls() {
    const dispatch = useAppDispatch();
    const { loading, age } = useAppSelector((state) => state.age);

    const handleAgeUp = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(ageUpAsync());
    };

    const handleAgeDown = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(ageDownAsync());
    };

    return (
        <form className="age-controls">
            <button
                type="button"
                onClick={handleAgeDown}
                className="control-btn down-btn"
                disabled={loading || age <= 0}
            >
                <span className="btn-icon">−</span>
                <span className="btn-text">Age Down</span>
            </button>

            <button
                type="button"
                onClick={handleAgeUp}
                className="control-btn up-btn"
                disabled={loading}
            >
                <span className="btn-icon">+</span>
                <span className="btn-text">Age Up</span>
            </button>
        </form>
    );
}
