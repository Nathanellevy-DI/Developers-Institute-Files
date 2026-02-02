// RecipeItem.ts - Manages individual recipe entries
import { v4 as uuidv4 } from 'uuid';

// Interface for Recipe data structure
export interface IRecipeItem {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    isFavorite: boolean;
}

// Class representing a single recipe
export class RecipeItem implements IRecipeItem {
    private _id: string;
    private _title: string;
    private _ingredients: string[];
    private _instructions: string;
    private _isFavorite: boolean;

    constructor(
        title: string,
        ingredients: string[],
        instructions: string,
        id?: string,
        isFavorite: boolean = false
    ) {
        this._id = id || uuidv4();
        this._title = title;
        this._ingredients = ingredients;
        this._instructions = instructions;
        this._isFavorite = isFavorite;
    }

    get id(): string { return this._id; }
    get title(): string { return this._title; }
    get ingredients(): string[] { return this._ingredients; }
    get instructions(): string { return this._instructions; }
    get isFavorite(): boolean { return this._isFavorite; }

    set title(value: string) { this._title = value; }
    set ingredients(value: string[]) { this._ingredients = value; }
    set instructions(value: string) { this._instructions = value; }

    toggleFavorite(): void {
        this._isFavorite = !this._isFavorite;
    }

    toJSON(): IRecipeItem {
        return {
            id: this._id,
            title: this._title,
            ingredients: this._ingredients,
            instructions: this._instructions,
            isFavorite: this._isFavorite,
        };
    }

    static fromJSON(data: IRecipeItem): RecipeItem {
        return new RecipeItem(data.title, data.ingredients, data.instructions, data.id, data.isFavorite);
    }
}
