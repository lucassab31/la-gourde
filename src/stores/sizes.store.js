import {types, flow} from "mobx-state-tree"
import { getSizes } from "services/sizes.product"

export const Sizes = types.model("Sizes", {
  id: types.number,
  name: types.string,
  price: types.number,
  maxIngredients: types.number,
})


export const SizesStore = types.model("SizesStore", {
  sizes: types.array(Sizes),
})
.actions(self => ({
  loadSizes: flow(function* () {
    try{
      const sizes = yield getSizes();
      self.sizes = sizes;
    }
    catch (error) {
      console.log(error);
    }
  }),
}));

export const sizesStore = SizesStore.create({
  sizes: [],
});
