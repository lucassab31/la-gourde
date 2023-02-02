import { types } from "mobx-state-tree";

export const CartProduct = types.model("CartProduct", {
  id: types.number,
  name: types.string,
  description: types.string,
  size: types.string,
  ingredients: types.array(),
  quantity: types.number,
});
