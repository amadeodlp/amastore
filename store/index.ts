import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/reducer";
import productsSlice from "./products/reducer";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
