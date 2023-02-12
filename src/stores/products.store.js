import {types, flow} from "mobx-state-tree"
import { getSmoothies } from "services/smoothies.product"
import { Ingredients } from "./ingredients.store";
import { Sizes } from "./sizes.store";

export const Products = types.model("Products", {
  id: types.number,
  title: types.string,
  description: types.string,
  ingredients: types.array(Ingredients),
  size: types.array(Sizes),
  color: types.string,
});

export const ProductsStore = types.model("ProductsStore", {
  products: types.array(Products),
})
.actions(self => ({
  loadSmoothies: flow(function* () {
    try{
      const products = yield getSmoothies();
      self.products = products;
    } catch (error) {
      console.log(error);
    }
  }),
}));

export const productsStore = ProductsStore.create({
  products: [],
});
