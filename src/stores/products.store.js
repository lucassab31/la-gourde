import { Ingredients } from "./ingredients.store";
import { Sizes } from "./sizes.store";
const { types } = require("mobx-state-tree");

export const Products = types.model("Products", {
  id: types.number,
  name: types.string,
  description: types.string,
  ingredients: types.array(Ingredients),
  size: Sizes | null,
  color: types.string,
});

export const ProductsStore = types.model("ProductsStore", {
  products: types.array(Products),
});

export const productsStore = ProductsStore.model("productsStore", {
  products: [],
});
