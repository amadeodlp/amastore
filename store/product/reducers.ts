import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  id: number | null;
  title: string;
  price: number | null;
  description: string;
  category: string;
  image: string;
}

const initialState: ProductState = {
  id: null,
  title: "",
  price: null,
  description: "",
  category: "",
  image: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPicture: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { setTitle, setDescription, setPicture, setCategory, setPrice } =
  productSlice.actions;

export default productSlice.reducer;
