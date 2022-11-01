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
  Certificate: [],
  Benefits: [],
  CreditTerm: "",
  Remarks: "",
  ApprovalLimit: "",
  Currency: "",
  ActionPolicy: [],
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
    getCertifications: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, Certificate: data },
      })),
    getBenefits: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, Benefits: data },
      })),
    getActionPolicy: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, ActionPolicy: data },
      })),
    updateCreditTerm: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, CreditTerm: data },
      })),
    updateEarnest: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, Remarks: data },
      })),
    updateCertificate: (name, isChecked) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          Certificate: state.FormDetail.Certificate.map((item) => {
            if (item.name === name) {
              item.isChecked = isChecked;
            }
            return item;
          }),
        },
      })),
    updateBenefits: (name, isChecked) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          Benefits: state.FormDetail.Benefits.map((item) => {
            if (item.name === name) {
              item.isChecked = isChecked;
            }
            return item;
          }),
        },
      })),
    updateActionPolicy: (name, isChecked) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          ActionPolicy: state.FormDetail.ActionPolicy.map((item) => {
            if (item.name === name) {
              item.isChecked = isChecked;
            }
            return item;
          }),
        },
      })),
    updateOtherCertificate: (value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          Certificate: state.FormDetail.Certificate.map((item) => {
            if (item.name === "OtherCer") {
              item.value = value;
            }
            return item;
          }),
        },
      })),
    updateOtherBenefit: (value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          Benefits: state.FormDetail.Benefits.map((item) => {
            if (item.name === "Other") {
              item.value = value;
            }
            return item;
          }),
        },
      })),
  }))
);

export default useFormInput;
