import React from "react";
import { ButtonStyled } from "./button.styled";

export const Button = ({ children, fetchQuote }) => {
  const handleClick = () => {
    fetchQuote("?category=" + children);
  };
  return (
    <ButtonStyled.Button onClick={handleClick} type="button">
      {children}
    </ButtonStyled.Button>
  );
};
