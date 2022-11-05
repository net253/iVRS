import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useFormDraft = create(
  devtools((set) => ({
    FormEditDraft: initialState,
    getFormEditDraft: (data) =>
      set(() => ({
        FormEditDraft: data,
      })),
  }))
);

export default useFormDraft;
