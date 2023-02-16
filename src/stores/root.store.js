import { types } from "mobx-state-tree";
import { CartStore, cartStore } from "./cart.store";
import { ProductsStore, productsStore } from "./products.store";
import {
  IngredientsCustomStore,
  IngredientsStore,
  ingredientsCustomStore,
  ingredientsStore,
} from "./ingredients.store";
import { AllergensStore, allergensStore } from "./allergens.store";
import {
  SizeChosenStore,
  SizesStore,
  sizeChosenStore,
  sizesStore,
} from "./sizes.store";

export const RootStore = types.model("RootStore", {
  cart: CartStore,
  products: ProductsStore,
  sizes: SizesStore,
  ingredients: IngredientsStore,
  allergens: AllergensStore,
  sizeChosen: SizeChosenStore,
  ingredientsCustom: IngredientsCustomStore,
});

export const rootStore = RootStore.create({
  cart: cartStore,
  products: productsStore,
  sizes: sizesStore,
  ingredients: ingredientsStore,
  sizeChosen: sizeChosenStore,
  allergens: allergensStore,
  ingredientsCustom: ingredientsCustomStore,
});
