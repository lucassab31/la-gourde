import { SIZES } from "../mocks/sizes";

export const getSizes = async () => {
    return SIZES;
}

export const getSizeById = async (id) => {
    return SIZES.find((size) => size.id === id);
}