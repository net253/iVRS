import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useDoclist = create(
  devtools((set) => ({
    DoclistPending: initialState,
    DoclistDraft: initialState,
    getDoclistDraft: (data) =>
      set(() => ({
        Doclist: data,
      })),
    getDoclistPending: (data) =>
      set(() => ({
        DoclistPending: data,
      })),
  }))
);

export default useDoclist;
