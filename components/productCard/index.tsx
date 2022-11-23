import { Product } from "../../models/Product";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ButtonBase from "@mui/material/ButtonBase";
import useCart from "../../hooks/useCart";
import { Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CartItem } from "../../models/CartItem";
import { resumeDescription } from "../../services/resumeDescription";
import Link from "next/link";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Props = {
  item: Product | CartItem;
};

const ProductCard: React.FC<Props> = ({ item }) => {
  const amounts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selectedAmount, setSelectedAmount] = useState<string>(amounts[0]);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const { updateCart, cartText } = useCart(item, parseInt(selectedAmount));
  const theme = useTheme();
  const description = resumeDescription(item.description);
  const handleUpdateCart = (): any => {
    const successMessage = cartText.includes("Add")
      ? `${
          selectedAmount + (selectedAmount !== amounts[0] ? " items" : " item")
        } added`
      : `Item removed from cart`;
    setSuccessMessage(successMessage);
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
    return updateCart();
  };
  return (
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
                  <Typography sx={{ color: theme.palette.success.main }}>
                    Learn more
                  </Typography>
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.category}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={handleUpdateCart}>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {cartText}
                </Typography>
              </Button>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={selectedAmount}
                onChange={(event) => setSelectedAmount(event.target.value)}
                input={<OutlinedInput label="Amount" />}
                MenuProps={MenuProps}
              >
                {amounts.map((number: string) => (
                  <MenuItem
                    key={number}
                    value={number}
                    style={{ fontWeight: theme.typography.fontWeightMedium }}
                  >
                    {number}
                  </MenuItem>
                ))}
              </Select>
              {successMessage && (
                <Typography
                  sx={{
                    color: theme.palette.success.main,
                    position: "absolute",
                  }}
                  variant="body2"
                >
                  {successMessage}
                </Typography>
              )}
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
  );
};

export default ProductCard;
