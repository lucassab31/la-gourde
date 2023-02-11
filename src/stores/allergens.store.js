const { types } = require("mobx-state-tree");

export const Allergens = types.model("Allergens", {
  id: types.number,
  name: types.string,
});

export const AllergensStore = types.model("AllergensStore", {
  allergens: types.array(Allergens),
});

export const allergensStore = AllergensStore.model("allergensStore", {
  allergens: [],
});
