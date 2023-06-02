import React from "react";
import { QuotedStyled } from "./quote.styled";
import { storageUtils } from "../../utils/storage";

export const Quote = ({ children, isEditable = true }) => {
  const handleClick = () => {
    storageUtils.setNewQuote(children);
  };
  return (
    <QuotedStyled.Container
      onClick={isEditable ? handleClick : undefined}
      isEditable={isEditable}
    >
      <QuotedStyled.Text>{children}</QuotedStyled.Text>
    </QuotedStyled.Container>
  );
};
