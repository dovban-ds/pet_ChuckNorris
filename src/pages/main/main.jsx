import React from "react";
import { Button } from "../../components/button/button";
import { Quote } from "../../components/quote/quote";
import { useMainState } from "./main.state";
import { MainStyled as Styled } from "./main.styled";

export const Main = () => {
  const { isLoading, categories, quote, fetchQuote } = useMainState();
  if (isLoading) return <div>Lading...</div>;

  return (
    <div>
      <Styled.Cont>
        {categories.map((category, index) => {
          return (
            <Button key={index} fetchQuote={fetchQuote}>
              {category}
            </Button>
          );
        })}
      </Styled.Cont>
      <Quote>{quote}</Quote>
    </div>
  );
};
