import { Grid, useTheme } from "@mui/material";
import React from "react";
import { Product } from "../../models/Product";
import ProductCard from "../productCard";

type Props = {
  products: Product[];
};

const ProductGrid: React.FC<Props> = ({ products }): any => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{ marginTop: theme.spacing(8) }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {products.map((item: Product) => {
        return (
          <Grid item xs={12} sm={6} key={item.id}>
            <ProductCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductGrid;
