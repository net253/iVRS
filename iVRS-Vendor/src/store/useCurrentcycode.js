import create from "zustand";
import { devtools } from "zustand/middleware";

const initialstate = [];

const useCurrencycode = create(
  devtools((set) => ({
    currencycode: initialstate,
    updateCurrencycode: (data) =>
      set(() => ({
        currencycode: data,
      })),
  }))
);

export default useCurrencycode;
