import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useFormDraft = create(
  devtools((set) => ({
    FormDraft: initialState,
    getFormDraft: (data) =>
      set(() => ({
        FormDraft: data,
      })),
  }))
);

export default useFormDraft;
