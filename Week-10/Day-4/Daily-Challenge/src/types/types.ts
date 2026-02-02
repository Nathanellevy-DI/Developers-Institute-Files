// Book Type Definition
// Defines the structure for each book item with id, title, and author

export interface Book {
    id: number;
    title: string;
    author: string;
}

// You can also define other types here for the generic List component
// For example, Movie type to demonstrate reusability

export interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
}

// Generic type for any listable item (must have an id)
export interface ListItem {
    id: number;
}
