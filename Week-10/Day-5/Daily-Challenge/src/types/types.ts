// TypeScript types and interfaces for the data

// Generic state interface for data fetching
export interface DataState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

// Recipe interface for the Food/Recipe API
export interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

// Search results from the recipe API
export interface RecipeSearchResult {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}

// User interface (for alternative demo)
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

// Generic fetch function type
export type FetchFunction<T> = () => Promise<T>;

// Props for the generic DataFetcher component
export interface DataFetcherProps<T> {
    fetchData: FetchFunction<T>;
    renderData: (data: T) => React.ReactNode;
    renderLoading?: () => React.ReactNode;
    renderError?: (error: string) => React.ReactNode;
}
