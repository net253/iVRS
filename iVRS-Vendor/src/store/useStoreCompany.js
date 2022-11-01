import  create  from "zustand";
import { devtools } from "zustand/middleware";

const initailState = {
  engCompany: "",
  thaiCompany: "",
  engAddress: "",
  thaiAddress: "",
  natureBusiness: "",
  companyWeb: "",
  tel: "",
  fax: "",
};

const useStoreCompany = create(
  devtools((set) => ({
    CompanyDetail: initailState,
    updateCompanyDetail: (key, value) =>
      set((state) => ({
        CompanyDetail: { ...state.CompanyDetail, [key]: value },
      })),
  }))
);

export default useStoreCompany;
