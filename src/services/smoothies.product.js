import { SMOOTHIES } from "../mocks/smoothies";

export const getSmoothies = async () => {
  return SMOOTHIES;
};

export const getSmoothieById = async (id) => {
  return SMOOTHIES.find((smoothie) => smoothie.id === id);
};
