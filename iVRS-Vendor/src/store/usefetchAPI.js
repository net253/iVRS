import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useFetchAPI = create(
  devtools((set) => ({
    Companylist: initialState,
    updateCompanylist: (data) =>
      set(() => ({
        Companylist: data,
      })),
  }))
);

export default useFetchAPI;
