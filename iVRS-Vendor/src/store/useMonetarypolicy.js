import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useMonetarypolicy = create(
  devtools((set) => ({
    monetarypolicy: initialState,
    updateMonetarypolicy: (data) =>
      set(() => ({
        monetarypolicy: data,
      })),
  }))
);

export default useMonetarypolicy;
