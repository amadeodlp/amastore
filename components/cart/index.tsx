import React, { useState, Fragment } from "react";
import { SwipeableDrawer, Button } from "@mui/material";
import { FaShoppingCart as CartIcon } from "react-icons/fa";
import { styles } from "./styles";

type Props = {};

const Cart: React.FC<Props> = () => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const toggleCart = (): void => {
    setCartVisible(!cartVisible);
  };
  return (
    <Fragment>
      <Button onClick={toggleCart}>
        <CartIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        sx={styles.Container}
        open={cartVisible}
        onClose={toggleCart}
        onOpen={toggleCart}
      ></SwipeableDrawer>
    </Fragment>
  );
};

export default Cart;
