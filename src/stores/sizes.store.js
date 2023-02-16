import { types, flow } from "mobx-state-tree";
import { getSizes } from "services/sizes.product";

export const Sizes = types.model("Sizes", {
  id: types.number,
  name: types.string,
  price: types.number,
  maxIngredients: types.number,
  show: types.boolean,
});

export const SizesStore = types
  .model("SizesStore", {
    sizes: types.array(Sizes),
  })
  .actions((self) => ({
    loadSizes: flow(function* () {
      try {
        const sizes = yield getSizes();
        self.sizes = sizes;
      } catch (error) {
        console.log(error);
      }
    }),
  }));

export const SizeChosenStore = types
  .model("SizeChosenStore", {
    sizeChosen: types.maybeNull(Sizes),
  })
  .actions((self) => ({
    setSizeChosen(size) {
      const validations = Sizes.validate(size, [
        { id: types.number },
        { name: types.string },
        { price: types.number },
        { maxIngredients: types.number },
        { show: types.boolean },
      ]);
      if (validations.length > 0) return;
      self.sizeChosen = size;
    },
    resetSizeChosen() {
      self.sizeChosen = null;
    },
  }));

export const sizesStore = SizesStore.create({
  sizes: [],
});

export const sizeChosenStore = SizeChosenStore.create({
  sizes: null,
});
