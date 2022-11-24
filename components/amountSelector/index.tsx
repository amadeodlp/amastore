import React from "react";
import { Button, ButtonGroup } from "@mui/material";

type Props = {
  selectedAmount: number;
  isItemInCart?: boolean;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

const AmountSelector: React.FC<Props> = ({
  selectedAmount,
  isItemInCart,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button disabled={selectedAmount === 1} onClick={() => handleDecrement()}>
        -
      </Button>
      {!isItemInCart && (
        <>
          <Button disabled>{selectedAmount}</Button>
          <Button onClick={() => handleIncrement()}>+</Button>
        </>
      )}
    </ButtonGroup>
  );
};

export default AmountSelector;
