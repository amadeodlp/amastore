import { AppDispatch } from "..";
import { Product } from "../../models/Product";
import {
  getProductsFailed,
  getProductsPending,
  getProductsSuccess,
  getProductCategoriesPending,
  getProductCategoriesSuccess,
  getProductCategoriesFailed,
} from "./reducer";
import axios from "axios";

export function getProducts() {
  return async (dispatch: AppDispatch): Promise<Product[]> => {
    dispatch(getProductsPending());
    try {
      const res = await axios.get("api/products");
      const data: Product[] = res.data;
      dispatch(getProductsSuccess(data));
      return Promise.resolve(data);
    } catch (error) {
      dispatch(getProductsFailed(error));
      return Promise.reject(error);
    }
  };
}

export function getProductCategories() {
  return async (dispatch: AppDispatch): Promise<string[]> => {
    dispatch(getProductCategoriesPending());
    try {
      const res = await axios.get("api/categories");
      const data: string[] = res.data;
      dispatch(getProductCategoriesSuccess(data));
      return Promise.resolve(data);
    } catch (error) {
      dispatch(getProductCategoriesFailed(error));
      return Promise.reject(error);
    }
  };
}
