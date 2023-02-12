
import {types, flow} from "mobx-state-tree"
import { Allergens } from "./allergens.store";
import { getIngredients } from "services/ingredients.product"

export const Ingredients = types.model("Ingredients", {
  id: types.number,
  name: types.string,
  isAvailable: types.boolean,
  allergens: types.array(Allergens),
  included: types.boolean,
})


export const IngredientsStore = types.model("IngredientsStore", {
  ingredients: types.array(Ingredients),
}).
actions(self => ({
  loadIngredients: flow(function* () {
    try{
      const ingredients = yield getIngredients();
      self.ingredients = ingredients;
    }
    catch (error) {
      console.log(error);
    }
  }),
}));

export const ingredientsStore = IngredientsStore.create({
  ingredients: [],
});
