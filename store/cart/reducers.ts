import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Product } from "../../models/Product";

export interface CartState {
  list: Product[];
}

const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.list = state.list.concat(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.list = state.list.filter((product) => product.id !== id);
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
