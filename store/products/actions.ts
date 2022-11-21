import { AppDispatch } from "..";
import { Product } from "../../models/Product";
import {
  getProductsFailed,
  getProductsPending,
  getProductsSuccess,
} from "./reducers";

function getProducts() {
  return async (dispatch: AppDispatch): Promise<Product[]> => {
    dispatch(getProductsPending());
    try {
      const res = await fetch("api/products");
      const data: Product[] = await res.json();
      dispatch(getProductsSuccess(data));
      return Promise.resolve(data);
    } catch (error: unknown) {
      dispatch(getProductsFailed(error));
      return Promise.reject(error);
    }
  };
}

export default getProducts;
