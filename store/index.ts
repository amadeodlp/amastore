import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/reducers";
import productSlice from "./product/reducers";
import productsSlice from "./products/reducers";

const store = configureStore({
  reducer: {
    product: productSlice,
    products: productsSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
