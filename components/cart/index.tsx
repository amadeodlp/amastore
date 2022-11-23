import React, { useState } from "react";
import { Button, Slide, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledDrawer } from "./styles";
import { CartItem } from "../../models/CartItem";
import ProductCard from "../productCard";

type Props = {
  list: CartItem[];
};

const Cart: React.FC<Props> = ({ list }) => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const theme = useTheme();
  const toggleCart = (): void => {
    setCartVisible(!cartVisible);
  };
  return (
    <>
      <Button onClick={toggleCart}>
        <ShoppingCartIcon
          fontSize="large"
          sx={{ color: theme.palette.common.white }}
        />
      </Button>
      <Slide direction="right" in={cartVisible}>
        <StyledDrawer
          hideBackdrop
          variant="temporary"
          elevation={0}
          open={cartVisible}
          onClose={toggleCart}
          onOpen={toggleCart}
        >
          {list.map((cartItem) => {
            return <ProductCard item={cartItem} key={cartItem.id} />;
          })}
        </StyledDrawer>
      </Slide>
    </>
  );
};

export default Cart;
