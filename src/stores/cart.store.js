const { types } = require("mobx-state-tree");
const { Products } = require("./products.store");

export const CartProducts = types.model("CartProduct", {
  itemId: types.number,
  product: Products,
  quantity: types.number,
});

export const CartStore = types.model("CartStore", {
  products: types.array(CartProducts),
});

export const cartStore = CartStore.create("cartStore", {
  products: [],
});
