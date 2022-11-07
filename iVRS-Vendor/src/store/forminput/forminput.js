import create from "zustand";
import { devtools } from "zustand/middleware";

const initailState = {
  isNewDoc: "",
  DocNo: "",
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
  IsDraft: "",
  SaleName: "",
  SaleEmail: "",
  VSaleEmail: "",
  SaleTel: "",
  VSaleTel: "",
  SaleManagerName: "",
  SaleManagerEmail: "",
  VSaleManagerEmail: "",
  SaleManagerTel: "",
  VSaleManagerTel: "",
  AccountName: "",
  AccountEmail: "",
  AccountTel: "",
  VAccountEmail: "",
  VAccountTel: "",
  Certificate: [],
  Benefits: [],
  CreditTerm: "",
  Remarks: "",
  ApprovalLimit: "",
  Currency: "",
  ActionPolicy: [],
  IsSTDPacking: "",
  IsMOQ: "",
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
  VTelBank: "",
  MonetaryPolicy: [],
};

const useFormInput = create(
  devtools((set) => ({
    FormDetail: initailState,
    ResetForm: () => set({ FormDetail: initailState }),
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
    getCreditTerm: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, CreditTerm: data },
      })),
    getMonetaryPolicy: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, MonetaryPolicy: data },
      })),
    updateCreditTerm: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, CreditTerm: data },
      })),
    updateEarnest: (data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, Remarks: data },
      })),
    updateisSTD: (isDetail, value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          [isDetail]: JSON.parse(value),
        },
      })),
    updateisDraft: (value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          IsDraft: value,
          isNewDoc: value,
        },
      })),
    updateRegister: (value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          IsDraft: !value,
          isNewDoc: value,
        },
      })),
    UpdatePDFMOQSTD: (topics, data) =>
      set((state) => ({
        FormDetail: { ...state.FormDetail, [topics]: data },
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
    updateActionPolicy: (name, value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          ActionPolicy: state.FormDetail.ActionPolicy.map((item) => {
            if (item.name === name) {
              item.value = value;
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
    updateBank: (value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          Bank: value,
        },
      })),
    updateCompany: (value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          CompanyAdmin: value,
        },
      })),
    updateMonetaryPolicy: (name, value) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          MonetaryPolicy: state.FormDetail.MonetaryPolicy.map((item) => {
            if (item.name === name) {
              item.value = value;
            }
            return item;
          }),
        },
      })),
    updatepdfDoc: (text, data) =>
      set((state) => ({
        FormDetail: {
          ...state.FormDetail,
          [text]: data,
        },
      })),
  }))
);

export default useFormInput;
