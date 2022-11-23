import { Product } from "../../models/Product";

export const getAllProducts = async (): Promise<void> => {
  fetch("api/products")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
