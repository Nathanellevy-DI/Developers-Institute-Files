// API functions for fetching data

import type { RecipeSearchResult, User } from '../types/types';

// API URLs
// Using TheMealDB as a free recipe API alternative
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

// Generic fetch function with error handling
export async function fetchFromApi<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
}

// Fetch recipes from the Recipe API
// Note: Spoonacular requires an API key, so we'll use a mock/demo endpoint
export async function fetchRecipes(): Promise<RecipeSearchResult> {
    // Using TheMealDB as an alternative free API
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Transform TheMealDB response to our Recipe format
    const recipes = data.meals?.map((meal: { idMeal: string; strMeal: string; strMealThumb: string }) => ({
        id: parseInt(meal.idMeal),
        title: meal.strMeal,
        image: meal.strMealThumb,
        imageType: 'jpg',
    })) || [];

    return {
        results: recipes,
        offset: 0,
        number: recipes.length,
        totalResults: recipes.length,
    };
}

// Fetch users from JSONPlaceholder API
export async function fetchUsers(): Promise<User[]> {
    return fetchFromApi<User[]>(USERS_API);
}

// Generic data fetcher that can work with any URL and type
export async function fetchData<T>(url: string): Promise<T> {
    return fetchFromApi<T>(url);
}
