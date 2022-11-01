import create from "zustand";
import { devtools } from "zustand/middleware";

const initialstate = [];

const usePaymentmethods = create(
  devtools((set) => ({
    paymentmethods: initialstate,
    updatePaymentmethods: (data) =>
      set(() => ({
        paymentmethods: data,
      })),
  }))
);

export default usePaymentmethods;
