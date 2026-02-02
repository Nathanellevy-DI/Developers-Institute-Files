// RecipeTemplate.ts - Manages rendering the recipes in the DOM
import { RecipeItem } from '../model/RecipeItem';
import { RecipeCollection } from '../model/RecipeCollection';

export class RecipeTemplate {
    private collection: RecipeCollection;
    private container: HTMLElement;

    constructor(collection: RecipeCollection, containerId: string) {
        this.collection = collection;
        const containerEl = document.getElementById(containerId);
        if (!containerEl) throw new Error(`Container "${containerId}" not found`);
        this.container = containerEl;
    }

    render(): void {
        this.container.innerHTML = '';
        if (this.collection.count === 0) {
            this.container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">📖</span>
          <p>No recipes yet. Add your first recipe above!</p>
        </div>`;
            return;
        }
        this.collection.recipes.forEach((recipe) => {
            this.container.appendChild(this.createRecipeCard(recipe));
        });
    }

    private createRecipeCard(recipe: RecipeItem): HTMLElement {
        const card = document.createElement('div');
        card.className = `recipe-card ${recipe.isFavorite ? 'favorite' : ''}`;
        card.dataset.id = recipe.id;
        card.innerHTML = `
      <div class="recipe-header">
        <h3 class="recipe-title">${recipe.isFavorite ? '⭐ ' : ''}${this.escapeHtml(recipe.title)}</h3>
        <div class="recipe-actions">
          <button class="btn-favorite" title="${recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}">${recipe.isFavorite ? '💛' : '🤍'}</button>
          <button class="btn-toggle" title="Show/Hide details">▼</button>
          <button class="btn-delete" title="Delete recipe">🗑️</button>
        </div>
      </div>
      <div class="recipe-details">
        <div class="ingredients-section">
          <h4>📝 Ingredients</h4>
          <ul class="ingredients-list">${recipe.ingredients.map((ing) => `<li>${this.escapeHtml(ing)}</li>`).join('')}</ul>
        </div>
        <div class="instructions-section">
          <h4>👨‍🍳 Instructions</h4>
          <p>${this.escapeHtml(recipe.instructions)}</p>
        </div>
      </div>`;
        this.attachCardEvents(card, recipe.id);
        return card;
    }

    private attachCardEvents(card: HTMLElement, recipeId: string): void {
        card.querySelector('.btn-favorite')?.addEventListener('click', () => {
            this.collection.toggleFavorite(recipeId);
            this.render();
        });
        const toggleBtn = card.querySelector('.btn-toggle');
        const details = card.querySelector('.recipe-details') as HTMLElement;
        toggleBtn?.addEventListener('click', () => {
            const isHidden = details.classList.toggle('hidden');
            if (toggleBtn) toggleBtn.textContent = isHidden ? '▶' : '▼';
        });
        card.querySelector('.btn-delete')?.addEventListener('click', () => {
            if (confirm('Delete this recipe?')) {
                this.collection.removeRecipe(recipeId);
                this.render();
            }
        });
    }

    private escapeHtml(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}
