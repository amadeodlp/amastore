import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import getProducts from "../store/products/actions";
import Navbar from "../components/navbar";
import Grid from "../components/productGrid";
import { Container } from "@mui/material";

export default function Home() {
  const { products, getProductsPending, getProductsFailed } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, [dispatch]);

  return (
    <Container>
      <Head>
        <title>Amastore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Grid />
    </Container>
  );
}
