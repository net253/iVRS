import create from "zustand";

const initialState = [];

const useFormPending = create((set) => ({
  FormPending: initialState,
  getFormPending: (data) =>
    set(() => ({
      FormPending: data,
    })),
}));

export default useFormPending;
