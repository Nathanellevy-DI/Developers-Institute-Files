// Daily Challenge: Generic Data Fetching Component
// Main application demonstrating DataFetcher with different data types

import { useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DataFetcher from './components/DataFetcher';
import { fetchRecipes, fetchUsers } from './api/api';
import type { RecipeSearchResult, User, Recipe } from './types/types';
import './App.css';

// Extended Recipe type with more details from TheMealDB
interface MealDetail {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory: string;
  strArea: string;
  strYoutube: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
}

// Tab type for switching between demos
type TabType = 'recipes' | 'users';

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabType>('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<MealDetail | null>(null);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);

  // Fetch recipe details when clicked
  const handleRecipeClick = async (recipeId: number): Promise<void> => {
    setLoadingDetail(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
      const data = await response.json();
      if (data.meals && data.meals[0]) {
        setSelectedRecipe(data.meals[0]);
      }
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    } finally {
      setLoadingDetail(false);
    }
  };

  // Close modal
  const handleCloseModal = (): void => {
    setSelectedRecipe(null);
  };

  // Memoized fetch functions to prevent re-renders
  const memoizedFetchRecipes = useCallback(() => fetchRecipes(), []);
  const memoizedFetchUsers = useCallback(() => fetchUsers(), []);

  // Render function for recipes
  const renderRecipes = (data: RecipeSearchResult): React.ReactNode => (
    <div>
      <p className="data-count">
        Found <strong>{data.results.length}</strong> recipes - Click to view details!
      </p>
      <div className="recipe-grid">
        {data.results.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => handleRecipeClick(recipe.id)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <div className="recipe-info">
              <h3 className="recipe-title">{recipe.title}</h3>
              <span className="view-recipe">Click to view recipe →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render function for users
  const renderUsers = (data: User[]): React.ReactNode => {
    if (!data || !Array.isArray(data)) {
      return <p>No users available</p>;
    }

    return (
      <div>
        <p className="data-count">
          Loaded <strong>{data.length}</strong> users
        </p>
        <div className="user-grid">
          {data.map((user: User) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                {user.name ? user.name.charAt(0) : '?'}
              </div>
              <div className="user-info">
                <h4>{user.name || 'Unknown'}</h4>
                <p>{user.email || 'No email'}</p>
                <p className="user-company">🏢 {user.company?.name || 'No company'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Get ingredients from meal
  const getIngredients = (meal: MealDetail): string[] => {
    const ingredients: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof MealDetail] as string;
      const measure = meal[`strMeasure${i}` as keyof MealDetail] as string;
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure || ''} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔄 Generic Data Fetcher</h1>
        <p>React + TypeScript + Redux</p>
      </header>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'recipes' ? 'active' : ''}`}
          onClick={() => setActiveTab('recipes')}
        >
          🍲 Recipes
        </button>
        <button
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Users
        </button>
      </div>

      {/* Data Content */}
      <main className="app-content">
        {activeTab === 'recipes' ? (
          <section className="data-section">
            <h2>Recipe Data</h2>
            <p className="section-desc">
              Fetching from TheMealDB API using generic DataFetcher&lt;RecipeSearchResult&gt;
            </p>
            <DataFetcher<RecipeSearchResult>
              fetchData={memoizedFetchRecipes}
              renderData={renderRecipes}
            />
          </section>
        ) : (
          <section className="data-section">
            <h2>User Data</h2>
            <p className="section-desc">
              Fetching from JSONPlaceholder API using generic DataFetcher&lt;User[]&gt;
            </p>
            <DataFetcher<User[]>
              fetchData={memoizedFetchUsers}
              renderData={renderUsers}
            />
          </section>
        )}
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            {loadingDetail ? (
              <div className="modal-loading">Loading...</div>
            ) : (
              <>
                <img
                  src={selectedRecipe.strMealThumb}
                  alt={selectedRecipe.strMeal}
                  className="modal-image"
                />
                <div className="modal-body">
                  <h2>{selectedRecipe.strMeal}</h2>
                  <div className="modal-tags">
                    <span className="tag">{selectedRecipe.strCategory}</span>
                    <span className="tag">{selectedRecipe.strArea}</span>
                  </div>
                  <h3>Ingredients</h3>
                  <ul className="ingredient-list">
                    {getIngredients(selectedRecipe).map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                  <h3>Instructions</h3>
                  <p className="instructions">{selectedRecipe.strInstructions}</p>
                  {selectedRecipe.strYoutube && (
                    <a
                      href={selectedRecipe.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="youtube-link"
                    >
                      📺 Watch on YouTube
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="app-footer">
        <p>Week 10 Day 5 - TypeScript Generics with React & Redux</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
