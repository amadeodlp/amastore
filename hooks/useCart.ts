import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/Product";
import { RootState, AppDispatch } from "../store";
import {
  removeFromCart,
  addToCart,
  updateProductInCart,
  clearCart,
} from "../store/cart/reducer";

function useCart(product: Product, amount: number) {
  const cart = useSelector((state: RootState) => state.cart.list);
  const dispatch: AppDispatch = useDispatch();

  const updateCart = (): void => {
    cart.find((c) => c.id === product.id)
      ? dispatch(removeFromCart(product.id))
      : dispatch(addToCart({ ...product, amount: amount }));
  };

  const handleIncrementAmount = (): void => {
    dispatch(updateProductInCart({ ...product, amount: amount + 1 }));
  };

  const handleDecrementAmount = (): void => {
    dispatch(updateProductInCart({ ...product, amount: amount - 1 }));
  };

  const resetCart = (): void => {
    dispatch(clearCart());
  };

  const cartText: string = cart.find((c) => c.id === product.id)
    ? "Remove from cart"
    : "Add to cart";

  return {
    updateCart,
    cartText,
    cart,
    resetCart,
    handleIncrementAmount,
    handleDecrementAmount,
  };
}

export default useCart;
