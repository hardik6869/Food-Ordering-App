import {AnyAction, configureStore, Reducer} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import adminReducer from './adminSlice';
import {Products} from '../interface/Interface';

type cart = Reducer<
    {
        products: Products[];
        quantity: number;
        total: number;
    },
    AnyAction
>;

type admin = Reducer<boolean, AnyAction>;

export default configureStore({
    reducer: {
        cart: cartReducer as cart,
        admin: adminReducer as admin,
    },
});
