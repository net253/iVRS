import create from "zustand";
import { devtools } from "zustand/middleware";

const initailState = {
  Name: "",
  Email: "",
  Username: "",
  ConfirmPassword: "",
  Password: "",
};

const useRegister = create(
  devtools((set) => ({
    RegisterDetail: initailState,
    updateRegisterDetail: (key, value) =>
      set((state) => ({
        RegisterDetail: { ...state.RegisterDetail, [key]: value },
      })),
  }))
);

export default useRegister;
