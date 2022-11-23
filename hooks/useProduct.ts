import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import {
  filterProductsByCategory,
  filterProductsByName,
} from "../store/products/reducer";

function useProduct() {
  const dispatch: AppDispatch = useDispatch();

  const filterProducts = (query: string): void => {
    dispatch(filterProductsByName(query));
  };

  const filterCategories = (category: string): void => {
    dispatch(filterProductsByCategory(category));
  };

  return { filterProducts, filterCategories };
}

export default useProduct;
