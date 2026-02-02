// Generic Data Fetching Component
// A type-safe component that fetches and displays data using React hooks and Redux

import { useEffect, useState, useCallback } from 'react';
import type { DataFetcherProps } from '../types/types';
import './DataFetcher.css';

// Generic DataFetcher component using TypeScript generics
function DataFetcher<T>({
    fetchData,
    renderData,
    renderLoading,
    renderError,
}: DataFetcherProps<T>): React.ReactNode {
    // Local state for data, loading, and error
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Memoized fetch function using useCallback
    const executeFetch = useCallback(async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const result = await fetchData();
            setData(result);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }, [fetchData]);

    // useEffect to fetch data on mount
    useEffect(() => {
        executeFetch();
    }, [executeFetch]);

    // Retry function for error state
    const handleRetry = (): void => {
        executeFetch();
    };

    // Render loading state
    if (loading) {
        if (renderLoading) {
            return renderLoading();
        }
        return (
            <div className="data-fetcher-loading">
                <div className="spinner"></div>
                <p>Loading data...</p>
            </div>
        );
    }

    // Render error state
    if (error) {
        if (renderError) {
            return renderError(error);
        }
        return (
            <div className="data-fetcher-error">
                <span className="error-icon">⚠️</span>
                <p>Error: {error}</p>
                <button onClick={handleRetry} className="retry-btn">
                    Try Again
                </button>
            </div>
        );
    }

    // Render data
    if (data) {
        return <div className="data-fetcher-content">{renderData(data)}</div>;
    }

    // No data state
    return (
        <div className="data-fetcher-empty">
            <p>No data available</p>
        </div>
    );
}

export default DataFetcher;
