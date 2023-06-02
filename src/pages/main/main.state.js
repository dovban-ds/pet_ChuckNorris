import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetch";

export const useMainState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchCategories();
    fetchQuote("");
    setIsLoading(false);
  }, []);
  const fetchCategories = async () => {
    const data = await fetchData("categories");
    setCategories(data);
    setIsLoading(false);
  };

  const fetchQuote = async (category) => {
    const data = await fetchData("random" + category);
    setQuote(data.value);
  };

  return {
    isLoading,
    categories,
    quote,
    fetchQuote,
  };
};
