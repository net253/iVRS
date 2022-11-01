import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useActionpolicy = create(
  devtools((set) => ({
    Actionpolicy: initialState,
    updateActionpolicy: (data) =>
      set(() => ({
        Actionpolicy: data,
      })),
  }))
);

export default useActionpolicy;
