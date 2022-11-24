import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";

export interface ProductsState {
  allProducts: Product[];
  products: Product[];
  categories: string[];
  getProductsPending: boolean;
  getProductsFailed: boolean;
  getProductCategoriesPending: boolean;
  getProductCategoriesFailed: boolean;
  productsError: unknown;
  categoriesError: unknown;
}

const initialState: ProductsState = {
  allProducts: [],
  products: [],
  categories: [],
  getProductsPending: false,
  getProductsFailed: false,
  getProductCategoriesPending: false,
  getProductCategoriesFailed: false,
  productsError: null,
  categoriesError: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsPending: (state) => {
      (state.getProductsPending = true),
        (state.getProductsFailed = false),
        (state.productsError = null);
    },
    getProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      (state.products = action.payload),
        (state.allProducts = action.payload),
        (state.getProductsPending = false),
        (state.getProductsFailed = false);
    },
    getProductsFailed: (state, action: PayloadAction<unknown>) => {
      (state.getProductsPending = false),
        (state.getProductsFailed = true),
        (state.productsError = action.payload);
    },
    getProductCategoriesPending: (state) => {
      (state.getProductCategoriesPending = true),
        (state.getProductCategoriesFailed = false),
        (state.categoriesError = null);
    },
    getProductCategoriesSuccess: (state, action: PayloadAction<string[]>) => {
      (state.categories = action.payload),
        (state.getProductCategoriesPending = false),
        (state.getProductCategoriesFailed = false);
    },
    getProductCategoriesFailed: (state, action: PayloadAction<unknown>) => {
      (state.getProductCategoriesPending = false),
        (state.getProductCategoriesFailed = true),
        (state.categoriesError = action.payload);
    },
    filterProductsByName: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload;
      if (searchTerm) {
        state.products = state.products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        state.products = state.allProducts;
      }
    },
    filterProductsByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (category) {
        if (state.allProducts.length) {
          state.products = state.allProducts.filter(
            (product) => product.category === category
          );
        } else {
          state.allProducts = state.products;
          state.products = state.products.filter(
            (product) => product.category === category
          );
        }
      } else {
        state.products = state.allProducts;
      }
    },
  },
});

export const {
  getProductsPending,
  getProductsSuccess,
  getProductsFailed,
  getProductCategoriesPending,
  getProductCategoriesSuccess,
  getProductCategoriesFailed,
  filterProductsByName,
  filterProductsByCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
