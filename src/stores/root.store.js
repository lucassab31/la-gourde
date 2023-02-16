import {types} from 'mobx-state-tree';
import {CartStore, cartStore} from './cart.store'
import { ProductsStore, productsStore } from './products.store';
import { IngredientsStore, ingredientsStore } from './ingredients.store';
import { AllergensStore, allergensStore } from './allergens.store';

export const RootStore = types.model('RootStore', {
    cart: CartStore,
    products: ProductsStore,
    ingredients: IngredientsStore,
    allergens: AllergensStore
})

export const rootStore = RootStore.create({
    cart: cartStore,
    products: productsStore,
    ingredients: ingredientsStore,
    allergens: allergensStore
});
