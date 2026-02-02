// main.ts - Bootstraps the Recipe Book Application
import { RecipeCollection } from './model/RecipeCollection';
import { RecipeTemplate } from './templates/RecipeTemplate';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const collection = new RecipeCollection();
  const template = new RecipeTemplate(collection, 'recipeContainer');
  template.render();

  const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
  const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;
  const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;

  form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const ingredientsText = ingredientsInput.value.trim();
    const instructions = instructionsInput.value.trim();
    if (!title || !ingredientsText || !instructions) { alert('Please fill in all fields'); return; }
    const ingredients = ingredientsText.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
    if (ingredients.length === 0) { alert('Please add at least one ingredient'); return; }
    collection.addRecipe(title, ingredients, instructions);
    template.render();
    form.reset();
    titleInput.focus();
    showNotification('Recipe added successfully! 🎉');
  });

  clearButton?.addEventListener('click', () => {
    if (collection.count === 0) { alert('No recipes to clear!'); return; }
    if (confirm(`Delete all ${collection.count} recipes?`)) {
      collection.clearAll();
      template.render();
      showNotification('All recipes cleared! 🗑️');
    }
  });

  function showNotification(message: string): void {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => { notification.classList.remove('show'); setTimeout(() => notification.remove(), 300); }, 2500);
  }
});
