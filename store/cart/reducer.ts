import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../models/Cart";

export interface CartState {
  list: Cart[];
}

const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.list = state.list.concat(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.list = state.list.filter((product) => product.id !== id);
    },
    updateProductInCart: (state, action: PayloadAction<Cart>) => {
      const product = action.payload;
      const productInCart = state.list.find((prod) => prod.id === product.id);
      if (productInCart) {
        const index = state.list.indexOf(productInCart);
        state.list[index] = product;
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateProductInCart } =
  cartSlice.actions;

export default cartSlice.reducer;
