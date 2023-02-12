import { INGREDIENTS } from "../mocks/ingredients";

export const getIngredients = async () => {
    return INGREDIENTS;
}

export const getIngredientById = async (id) => {
    return INGREDIENTS.find((ingredient) => ingredient.id === id);
}
