import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Spicy rice with tomatoes and pepper." }
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
