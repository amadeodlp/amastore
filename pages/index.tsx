import Head from "next/head";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { Container } from "@mui/material";
import ProductGrid from "../components/productGrid";
import Progress from "../components/progressBar";
import { getProductCategories, getProducts } from "../store/products/actions";
import { clearCart } from "../store/cart/reducer";

export default function Home() {
  const { products, categories, getProductsPending } = useAppSelector(
    (state) => state.products
  );
  const { list } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductCategories());
  }, [dispatch]);

  return (
    <Container>
      <Head>
        <title>Amastore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar cartList={list} categories={categories} />
      {getProductsPending ? <Progress /> : <ProductGrid products={products} />}
    </Container>
  );
}
