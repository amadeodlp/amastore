import React from "react";
import { Container } from "@mui/material";
import Cart from "../cart";

type Props = {};
const Navbar: React.FC<Props> = () => {
  return (
    <Container>
      <Cart />
      This is a mericar
    </Container>
  );
};

export default Navbar;
