import { getProductCategories, getProducts } from "./actions";
import { Product } from "../../models/Product";

const dispatch = jest.fn();

describe("productsFetching", () => {
  it("returns a products promise", async () => {
    expect(getProducts()(dispatch)).toBeInstanceOf(Promise);
  });
  it("resolves products promise to expected result", async () => {
    getProducts()(dispatch).then((products: Product[]) => {
      expect(products).toHaveLength(20);
    });
  });
});

describe("categoriesFetching", () => {
  const expected = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  it("returns a categories promise", async () => {
    expect(getProductCategories()(dispatch)).toBeInstanceOf(Promise);
  });
  it("resolves categories promise to expected result", async () => {
    getProductCategories()(dispatch).then((categories: string[]) => {
      expect(categories).toEqual(expected);
    });
  });
});
