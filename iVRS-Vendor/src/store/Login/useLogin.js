import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
  Username: "",
  Password: "",
  isLoggedIn: false,
};

export const useLogin = create(
  devtools((set) => ({
    LoginDetail: initialState,
    updateLoginDetail: (key, value) =>
      set((state) => ({
        LoginDetail: { ...state.LoginDetail, [key]: value },
      })),
    updateLoginStatus: (value) =>
      set((state) => ({
        LoginDetail: { ...state.LoginDetail, isLoggedIn: value },
      })),
  }))
);
