import { Allergens } from "./allergens.store";
const { types } = require("mobx-state-tree");

export const Ingredients = types.model("Ingredients", {
  id: types.number,
  name: types.string,
  isAvailable: types.boolean,
  allergens: types.array(Allergens),
  included: types.boolean,
});

export const IngredientsStore = types.model("IngredientsStore", {
  ingredients: types.array(Ingredients),
});

export const ingredientsStore = IngredientsStore.model("ingredientsStore", {
  ingredients: [],
});
