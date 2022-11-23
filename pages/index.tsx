import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { getProducts, getProductCategories } from "../store/products/actions";
import Navbar from "../components/navbar";
import { Container } from "@mui/material";
import ProductGrid from "../components/productGrid";
import Progress from "../components/progressBar";

export default function Home() {
  const { products, categories, getProductsPending, getProductsFailed } =
    useSelector((state: RootState) => state.products);
  const { list } = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();

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
