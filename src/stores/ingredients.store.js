import { toJS } from "mobx";
import { Allergens } from "./allergens.store";
import { getIngredients } from "services/ingredients.product";
const { types, flow } = require("mobx-state-tree");

export const Ingredients = types.model("Ingredients", {
  id: types.number,
  name: types.string,
  isAvailable: types.boolean,
  allergens: types.array(Allergens),
  included: types.boolean,
});

export const IngredientsStore = types
  .model("IngredientsStore", {
    ingredients: types.array(Ingredients),
  })
  .actions((self) => ({
    loadIngredients: flow(function* () {
      try {
        const ingredients = yield getIngredients();
        self.ingredients = ingredients;
      } catch (error) {
        console.log(error);
      }
    }),
  }));

export const IngredientsCustomStore = types
  .model("IngredientsCustomStore", {
    ingredientsCustom: types.array(Ingredients),
    maxIngredients: types.maybeNull(types.number),
  })
  .actions((self) => ({
    setMaxIngredients(maxIngredients) {
      if (typeof maxIngredients !== "number" || maxIngredients === 0) return;
      self.maxIngredients = maxIngredients;
    },
    addIngredient(ingredient) {
      if (
        !self.maxIngredients ||
        self.ingredientsCustom.length === self.maxIngredients
      )
        return;
      const validations = Ingredients.validate(ingredient, [
        { id: types.number },
        { name: types.string },
        { isAvailable: types.boolean },
        { allergens: types.array(Allergens) },
        { included: types.boolean },
      ]);
      if (validations.length > 0) return;
      let isIncluded = false;
      self.ingredientsCustom.forEach((ingredientCustom) => {
        if (ingredientCustom.id === ingredient.id) {
          isIncluded = true;
        }
      });
      if (isIncluded) return;
      self.ingredientsCustom.push(ingredient);
    },
    removeIngredient(ingredient) {
      const validations = Ingredients.validate(ingredient, [
        { id: types.number },
        { name: types.string },
        { isAvailable: types.boolean },
        { allergens: types.array(Allergens) },
        { included: types.boolean },
      ]);
      if (validations.length > 0) return;
      self.ingredientsCustom = toJS(self.ingredientsCustom).filter(
        (ingredientCustom) => ingredientCustom.id !== ingredient.id
      );
    },
    resetIngredientsCustom() {
      self.ingredientsCustom = [];
    },
  }))
  .views((self) => ({
    isIncluded(ingredient) {
      let isIncluded = false;
      self.ingredientsCustom.forEach((ingredientCustom) => {
        const ingredientCustomObj = toJS(ingredientCustom);
        if (ingredientCustomObj.id === ingredient?.id) isIncluded = true;
        if (ingredientCustomObj.id === ingredient) isIncluded = true;
      });
      return isIncluded;
    },
  }));

export const ingredientsStore = IngredientsStore.create({
  ingredients: [],
});

export const ingredientsCustomStore = IngredientsCustomStore.create({
  ingredientsCustom: [],
  maxIngredients: null,
});
