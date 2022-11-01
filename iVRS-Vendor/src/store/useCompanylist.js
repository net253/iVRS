import crate from "zustand";
import { devtools } from "zustand/middleware";

const initialstate = [];

const useCompanylist = crate(
  devtools((set) => ({
    companylist: initialstate,
    setCompanylist: (companylist) => set({ companylist }),
  }))
);

export default useCompanylist;
