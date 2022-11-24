import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import cartSlice from "./cart/reducer";
import productsSlice from "./products/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: persistedReducer,
  },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
