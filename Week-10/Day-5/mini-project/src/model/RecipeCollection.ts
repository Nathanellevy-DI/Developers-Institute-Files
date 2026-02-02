// RecipeCollection.ts - Handles the complete collection of recipes
import { RecipeItem } from './RecipeItem';
import type { IRecipeItem } from './RecipeItem';

const STORAGE_KEY = 'recipe-book-collection';

export class RecipeCollection {
    private _recipes: RecipeItem[];

    constructor() {
        this._recipes = [];
        this.load();
    }

    get recipes(): RecipeItem[] { return this._recipes; }
    get count(): number { return this._recipes.length; }
    get favorites(): RecipeItem[] { return this._recipes.filter((r) => r.isFavorite); }

    addRecipe(title: string, ingredients: string[], instructions: string): RecipeItem {
        const recipe = new RecipeItem(title, ingredients, instructions);
        this._recipes.unshift(recipe);
        this.save();
        return recipe;
    }

    removeRecipe(id: string): boolean {
        const index = this._recipes.findIndex((r) => r.id === id);
        if (index !== -1) {
            this._recipes.splice(index, 1);
            this.save();
            return true;
        }
        return false;
    }

    findRecipe(id: string): RecipeItem | undefined {
        return this._recipes.find((r) => r.id === id);
    }

    toggleFavorite(id: string): boolean {
        const recipe = this.findRecipe(id);
        if (recipe) {
            recipe.toggleFavorite();
            this.save();
            return true;
        }
        return false;
    }

    clearAll(): void {
        this._recipes = [];
        this.save();
    }

    save(): void {
        try {
            const data = this._recipes.map((r) => r.toJSON());
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving recipes:', error);
        }
    }

    load(): void {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const data: IRecipeItem[] = JSON.parse(stored);
                this._recipes = data.map((item) => RecipeItem.fromJSON(item));
            }
        } catch (error) {
            console.error('Error loading recipes:', error);
            this._recipes = [];
        }
    }
}
