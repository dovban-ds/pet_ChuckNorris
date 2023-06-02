import React from "react";
import { Quote } from "../../components/quote/quote";
import { storageUtils } from "../../utils/storage";

export const Favorite = () => {
  const quote = storageUtils.getQuote();
  return <Quote isEditable={false}>{quote}</Quote>;
};
