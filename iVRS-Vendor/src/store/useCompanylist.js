import crate from "zustand";
import { devtools } from "zustand/middleware";

const initialstate = [];

const useCompanylist = crate(
  devtools((set) => ({
    companylist: initialstate,
    updateCompanylist: (data) =>
      set(() => ({
        companylist: data,
      })),
  }))
);

export default useCompanylist;
