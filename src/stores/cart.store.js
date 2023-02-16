import { types, getRoot } from "mobx-state-tree";
import { Ingredients } from "./ingredients.store";
import { Sizes } from "./sizes.store";

const CartProduct = types
  .model("CartProduct", {
    id: types.number,
    // lineItemID: types.number,
    title: types.string,
    description: types.string,
    ingredients: types.array(Ingredients),
    size: types.maybeNull(Sizes),
    color: types.string,
    quantity: types.number,
  })
  .actions((self) => ({
    increment() {
      self.quantity += 1;
    },
    decrement() {
      const {
        cart: { removeFromCart },
      } = getRoot(self);
      if (self.quantity <= 1) {
        removeFromCart(self.id);
      } else {
        self.quantity -= 1;
      }
    },
    afterCreated() {
      console.log("created");
    },
    beforeDestroy() {
      console.log("je reveindrai");
    },
  }))
  .views((self) => ({
    get totalPrice() {
      return self.quantity * self.size.price;
    },
  }));

// model
export const CartStore = types
  .model("CartStore", {
    products: types.array(CartProduct),
  })
  .actions((self) => ({
    addToCart(product) {
      console.log(product);
      const foundProduct = self.products.find((p) => p.id === product.id);
      if (foundProduct) {
        foundProduct.quantity += product.quantity;
      } else {
        self.products.push(product);
      }
    },
    removeFromCart(productId) {
      self.products = self.products.filter(
        (product) => product.id !== productId
      );
    },
    resetCart() {
      self.products.clear();
    },
  }))
  .views((self) => ({
    get totalPrice() {
      return self.products.reduce((acc, currentP) => {
        return acc + currentP.totalPrice;
      }, 0);
    },
    get totalQuantity() {
      return self.products.reduce((acc, currentP) => {
        return acc + currentP.quantity;
      }, 0);
    },
  }));

// store
export const cartStore = CartStore.create({
  products: [],
});
