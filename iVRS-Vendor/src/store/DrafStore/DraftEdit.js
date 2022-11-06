import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
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

const useDraftEdit = create(
  devtools((set) => ({
    draftEdit: initialState,
    setDraftEdit: (data) =>
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          ...data,
          [data.name]: data.value,
          VSaleEmail: data.SaleEmail,
          VSaleTel: data.SaleTel,
          VSaleManagerEmail: data.SaleManagerEmail,
          VSaleManagerTel: data.SaleManagerTel,
          VAccountEmail: data.AccountEmail,
          VAccountTel: data.AccountTel,
          VTelBank: data.TelBank,
        },
      })),
    resetDraftEdit: () => set({ draftEdit: initialState }),
    updateDraftEdit: (key, value) => {
      set((state) => ({
        draftEdit: { ...state.draftEdit, [key]: value },
      }));
    },
    updateCompanyAdmin: (data) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          CompanyAdmin: data,
        },
      }));
    },
    updateBenefit: (name, isChecked) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          Benefits: state.draftEdit.Benefits.map((item) =>
            item.name === name ? { ...item, isChecked: isChecked } : item
          ),
        },
      }));
    },
    updateOtherBenefit: (value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          Benefits: state.draftEdit.Benefits.map((item) =>
            item.name === "Other" ? { ...item, value: value } : item
          ),
        },
      }));
    },
    updateCertificate: (name, isChecked) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          Certificate: state.draftEdit.Certificate.map((item) =>
            item.name === name ? { ...item, isChecked: isChecked } : item
          ),
        },
      }));
    },
    updateOtherCertificate: (value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          Certificate: state.draftEdit.Certificate.map((item) =>
            item.name === "OtherCer" ? { ...item, value: value } : item
          ),
        },
      }));
    },
    updateCreditTerm: (value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          CreditTerm: value,
        },
      }));
    },
    updateEarnest: (value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          Remarks: value,
        },
      }));
    },
    updateActionPolicy: (name, value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          ActionPolicy: state.draftEdit.ActionPolicy.map((item) =>
            item.name === name ? { ...item, value: value } : item
          ),
        },
      }));
    },
    updateisSTD: (isDetail, value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          [isDetail]: JSON.parse(value),
        },
      }));
    },
    updateBank: (value) =>
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          Bank: value,
        },
      })),
    updateMonetaryPolicy: (name, value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          MonetaryPolicy: state.draftEdit.MonetaryPolicy.map((item) =>
            item.name === name ? { ...item, value: value } : item
          ),
        },
      }));
    },
    updateisDraft: (value) => {
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          IsDraft: value,
          isNewDoc: !value,
        },
      }));
    },
    updatepdfDoc: (text, data) =>
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          [text]: data,
        },
      })),
    updatePDFMOQSTD: (topics, data) =>
      set((state) => ({
        draftEdit: {
          ...state.draftEdit,
          [topics]: data,
        },
      })),
  }))
);

export default useDraftEdit;
