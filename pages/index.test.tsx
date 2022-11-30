import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./index";

describe("homePage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
