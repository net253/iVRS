import create from "zustand";
import { devtools } from "zustand/middleware";

const initailState = {
  JuristicID: "",
  CompanyAdmin: "",
  CompanyNameEN: "",
  CompanyNameTH: "",
  AddressEN: "",
  AddressTH: "",
  NatureBusiness: "",
  Website: "",
  Tel: "",
  Fax: "",
  Status: "",
  IsDraft: "",
  SaleName: "",
  SaleEmail: "",
  SaleTel: "",
  SaleManagerName: "",
  SaleManagerEmail: "",
  SaleManagerTel: "",
  AccountName: "",
  AccountEmail: "",
  AccountTel: "",
  Certificate: "",
  Benefits: "",
  CreditTerm: "",
  Remarks: "",
  ApprovalLimit: "",
  Currency: "",
  ActionPolicy: "",
  IsSTDPacking: "",
  IsMOQ: "111",
  STDPackingBase64: "",
  MOQBase64: "",
  BookBankBase64: "",
  BookMDBase64: "",
  VatLicenseBase64: "",
  FiStmtsBase64: "",
  AffidavitBase64: "",
  MapBase64: "",
  OtherBase64: "",
  AccountBankName: "",
  AccountNo: "",
  Bank: "",
  Branch: "",
  ContactPerson: "",
  TelBank: "",
  Email: "",
  MonetaryPolicy: "",
};

const useFormInput = create(
  devtools((set) => ({
    FormDetail: initailState,
    updateFormDetail: (key, value) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, [key]: value },
      })),
    updateFormStatus: (value) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, Status: value },
      })),
  }))
);

export default useFormInput;
