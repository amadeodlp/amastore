import { CallTracker } from "assert";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/Product";
import { RootState, AppDispatch } from "../store";
import { removeFromCart, addToCart } from "../store/cart/reducers";

function useCart(product: Product) {
  const cart = useSelector((state: RootState) => state.cart.list);
  const dispatch: AppDispatch = useDispatch();

  const updateCart = (): void => {
    cart.find((c) => c.id === product.id)
      ? dispatch(() => removeFromCart(product.id))
      : dispatch(() => addToCart(product));
  };

  const cartText = cart.find((c) => c.id === product.id)
    ? "Remove from cart"
    : "Add to cart";

  return { updateCart, cartText };
}

export default useCart;
