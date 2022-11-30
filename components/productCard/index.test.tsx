import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ProductCard from "./index";

test("responds to cart addition", async () => {
  const product = {
    id: 1,
    title: "title",
    price: 2,
    description: "description",
    category: "category",
    image: "image",
    rating: {
      rate: 1,
      count: 1,
    },
  };
  // ARRANGE
  render(
    <Provider store={store}>
      <ProductCard item={product} />
    </Provider>
  );

  // ACT
  await userEvent.click(screen.getByText("Add to cart"));

  // ASSERT
  expect(screen.getByText("Remove from cart")).toBeInTheDocument();
});
