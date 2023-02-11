const { types } = require("mobx-state-tree");

export const Sizes = types.model("Sizes", {
  id: types.number,
  name: types.string,
  price: types.number,
  maxIngredients: types.number,
});

export const SizesStore = types.model("SizesStore", {
  sizes: types.array(Sizes),
});

export const sizesStore = SizesStore.create("sizesStore", {
  sizes: [],
});
