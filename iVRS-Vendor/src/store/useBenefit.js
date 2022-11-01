import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useBenefit = create(
  devtools((set) => ({
    benefit: initialState,
    updateBenefit: (data) =>
      set(() => ({
        benefit: data,
      })),
  }))
);

export default useBenefit;
