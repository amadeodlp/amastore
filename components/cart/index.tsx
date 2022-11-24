import React, { useState } from "react";
import { Button, Slide, useTheme, Typography, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledDrawer } from "./styles";
import { Cart } from "../../models/Cart";
import CartItem from "../cartItem";

type Props = {
  list: Cart[];
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
        <Typography sx={{ color: theme.palette.common.white, paddingX: 2 }}>
          cart ({list.length})
        </Typography>
        <ShoppingCartIcon
          fontSize="large"
          sx={{ color: theme.palette.common.white, paddingRight: 1 }}
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
          <Box>
            <Typography variant="h6" sx={{ padding: 3 }}>
              YOUR CART
            </Typography>
            {!list.length && (
              <Typography variant="h6" sx={{ padding: 3 }}>
                Your cart is currently empty :(
              </Typography>
            )}
          </Box>
          {list.map((cartItem) => {
            return <CartItem item={cartItem} key={cartItem.id} />;
          })}
        </StyledDrawer>
      </Slide>
    </>
  );
};

export default Cart;
