// const QUOTE_KEY = "QUOTE";

export const storageUtils = {
  setNewQuote: (quote) => {
    localStorage.setItem("QUOTE", quote);
  },
  getQuote: () => {
    return localStorage.getItem("QUOTE");
  },
};
