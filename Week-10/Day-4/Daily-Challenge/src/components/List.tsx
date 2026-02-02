// Generic List Component
// A reusable component that accepts an array of items and a renderItem function
// using TypeScript generics to customize how each item is rendered

import type { ReactNode } from 'react';
import './List.css';

// Generic type constraint - items must have at least an 'id' property
interface ListProps<T extends { id: number }> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    emptyMessage?: string;
}

// Generic List component using TypeScript generics
function List<T extends { id: number }>({
    items,
    renderItem,
    emptyMessage = 'No items to display'
}: ListProps<T>): ReactNode {

    // Handle empty list
    if (items.length === 0) {
        return (
            <div className="list-empty">
                <span className="empty-icon">📭</span>
                <p>{emptyMessage}</p>
            </div>
        );
    }

    return (
        <ul className="generic-list">
            {items.map((item) => (
                <li key={item.id} className="list-item">
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );
}

export default List;
