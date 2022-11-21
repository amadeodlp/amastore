import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";

export interface ProductsState {
  products: Product[];
  getProductsPending: boolean;
  getProductsFailed: boolean;
  error: unknown;
}

const initialState: ProductsState = {
  products: [],
  getProductsPending: false,
  getProductsFailed: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsPending: (state) => {
      (state.getProductsPending = true),
        (state.getProductsFailed = false),
        (state.error = null);
    },
    getProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      (state.products = action.payload),
        (state.getProductsPending = false),
        (state.getProductsFailed = false);
    },
    getProductsFailed: (state, action: PayloadAction<unknown>) => {
      (state.getProductsPending = false),
        (state.getProductsFailed = false),
        (state.error = action.payload);
    },
  },
});

export const { getProductsPending, getProductsSuccess, getProductsFailed } =
  productsSlice.actions;

export default productsSlice.reducer;
