import { types, flow } from "mobx-state-tree";
import { getAllergens } from "services/allergens.product";

export const Allergens = types.model("Allergens", {
  id: types.number,
  name: types.string,
  icon: types.string,
});

export const AllergensStore = types
  .model("AllergensStore", {
    allergens: types.array(Allergens),
  })
  .actions((self) => ({
    loadAllergens: flow(function* () {
      try {
        const allergens = yield getAllergens();
        self.allergens = allergens;
      } catch (error) {
        console.log(error);
      }
    }),
  }));

export const allergensStore = AllergensStore.create({
  allergens: [],
});
