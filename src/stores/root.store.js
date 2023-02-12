import  {types} from 'mobx-state-tree';
import {CartStore, cartStore} from './cart.store'
import { ProductsStore, productsStore } from './products.store';

export const RootStore = types.model('RootStore', {
    cart: CartStore,
    products: ProductsStore
})

export const rootStore = RootStore.create({
    cart: cartStore,
    products: productsStore
});
