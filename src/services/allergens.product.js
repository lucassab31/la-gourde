import { ALLERGENS } from "../mocks/allergens";

export const getAllergens = async () => {
    return ALLERGENS;
};

export const getAllergenById = async (id) => {
    return ALLERGENS.find((allergen) => allergen.id === id);
}