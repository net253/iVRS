import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = [];

const useCertifications = create(
  devtools((set) => ({
    certifications: initialState,
    updateCertifications: (data) =>
      set(() => ({
        certifications: data,
      })),
  }))
);

export default useCertifications;
