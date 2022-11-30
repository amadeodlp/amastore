import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Cart from "./index";

test("renders item in cart correctly", async () => {
  const products = [
    {
      id: 1,
      title: "title",
      price: 2,
      amount: 1,
      description: "description",
      category: "category",
      image: "image",
      rating: {
        rate: 1,
        count: 1,
      },
    },
  ];
  // ARRANGE
  render(
    <Provider store={store}>
      <Cart list={products} />
    </Provider>
  );

  // ASSERT
  expect(screen.getByText("Remove")).toBeInTheDocument();
});
