import create from "zustand";
import { devtools } from "zustand/middleware";

const initailstate = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const useResetPassword = create(
  devtools((set) => ({
    ResetPassword: initailstate,
    updateResetPassword: (key, value) =>
      set((state) => ({
        ResetPassword: { ...state.ResetPassword, [key]: value },
      })),
  }))
);

export default useResetPassword;
