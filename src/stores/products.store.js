import { getSmoothies } from "services/smoothies.product";
import { Ingredients } from "./ingredients.store";
import { Sizes } from "./sizes.store";
const { types, flow } = require("mobx-state-tree");

export const Products = types.model("Products", {
  id: types.number,
  title: types.string,
  description: types.string,
  ingredients: types.array(Ingredients),
  size: types.maybeNull(Sizes),
  color: types.string,
});

export const ProductsStore = types
  .model("ProductsStore", {
    products: types.array(Products),
  })
  .actions((self) => ({
    loadSmoothies: flow(function* () {
      try {
        const products = yield getSmoothies();
        self.products = products;
      } catch (error) {
        console.log(error);
      }
    }),
    loadSmoothiesByIngredient: flow(function* (ingredient) {
      try {
        const products = yield getSmoothies();
        self.products = products.filter((product) => {
          return product.ingredients.some((item) => item.id === ingredient);
        });
      } catch (error) {
        console.log(error);
      }
    }),
    loadSmoothieOne: flow(function* (id) {
      try {
        const productOne = yield getSmoothies();
        self.productOne = productOne.filter((product) => product.id === id);
        self.productOne = self.productOne[0];
      } catch (error) {
        console.log(error);
      }
    }),
  }))
  .views((self) => ({}));

export const productsStore = ProductsStore.create({
  products: [],
});
