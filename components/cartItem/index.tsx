import { Container, Box, Typography, Button } from "@mui/material";
import useCart from "../../hooks/useCart";
import { Cart } from "../../models/Cart";
import AmountSelector from "../amountSelector";
import { Img } from "./styles";

type Props = {
  item: Cart;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { handleIncrementAmount, handleDecrementAmount, updateCart } = useCart(
    item,
    item.amount
  );
  const totalPrice = (item.amount * item.price).toFixed(2);
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="subtitle1" sx={{ width: "130px" }}>
          {item.title}
        </Typography>
        <Box>
          <Typography variant="subtitle2">Price: ${item.price}</Typography>
          <Typography variant="subtitle2">Total: ${totalPrice}</Typography>
        </Box>
        <AmountSelector
          selectedAmount={item.amount}
          handleIncrement={handleIncrementAmount}
          handleDecrement={handleDecrementAmount}
        />
        <Button onClick={updateCart}>Remove</Button>
      </Box>
      <Box>
        <Img src={item.image} alt={item.title} />
      </Box>
    </Container>
  );
};

export default CartItem;
