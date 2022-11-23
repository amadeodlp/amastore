import { Product } from "../../models/Product";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Img } from "./styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import useCart from "../../hooks/useCart";
import { Alert, Button, Fade, Snackbar } from "@mui/material";
import { CartItem } from "../../models/CartItem";
import { resumeDescription } from "../../services/resumeDescription";
import Link from "next/link";
import AmountSelector from "../amountSelector";

type Props = {
  item: Product | CartItem;
};

const ProductCard: React.FC<Props> = ({ item }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const { updateCart, cartText, cart } = useCart(item, selectedAmount);
  const handleIncrement = (): void => {
    setSelectedAmount(selectedAmount + 1);
  };

  const handleDecrement = (): void => {
    setSelectedAmount(selectedAmount - 1);
  };

  const theme = useTheme();
  const description = resumeDescription(item.description);
  const handleUpdateCart = (): any => {
    setSelectedAmount(1);
    setToastOpen(true);
    return updateCart();
  };
  const isItemInCart = cart.find((product) => product.id === item.id);
  return (
    <Fade in>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Snackbar
          open={toastOpen}
          autoHideDuration={6000}
          onClose={() => setToastOpen(false)}
        >
          <Alert
            onClose={() => setToastOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {isItemInCart ? "Item added to cart!" : "Item removed from cart."}
          </Alert>
        </Snackbar>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="product" src={item.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                  <Link href="/detail">
                    <Typography color={theme.palette.success.main}>
                      Learn more
                    </Typography>
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
              </Grid>
              <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Button onClick={handleUpdateCart}>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    {cartText}
                  </Typography>
                </Button>
                <AmountSelector
                  selectedAmount={selectedAmount}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  isItemInCart={!!isItemInCart}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${item.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
};

export default ProductCard;
