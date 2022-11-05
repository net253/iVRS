import {
  validateEmail,
  validatePhone,
  validateNameThaiAndEnglish,
  validateJuristicID,
  validateWebsiteUrl,
  validateTextEngishAndNumberSpace,
  validateNumber,
} from "../libs/validate.js";
export const validatevendorRegister = ({
  JuristicID,
  CompanyAdmin,
  CompanyNameEN,
  CompanyNameTH,
  AddressEN,
  AddressTH,
  NatureBusiness,
  Website,
  Tel,
  Fax,
  SaleName,
  SaleEmail,
  VSaleEmail,
  SaleManagerName,
  SaleTel,
  VSaleTel,
  SaleManagerEmail,
  VSaleManagerEmail,
  SaleManagerTel,
  VSaleManagerTel,
  AccountName,
  AccountBankName,
  AccountNo,
  Branch,
  ContactPerson,
  AccountTel,
  VAccountTel,
  AccountEmail,
  VAccountEmail,
  Certificate,
  Benefits,
  IsSTDPacking,
  IsMOQ,
  STDPackingBase64,
  MOQBase64,
  VatLicenseBase64,
  AffidavitBase64,
  MapBase64,
  BookBankBase64,
  BookMDBase64,
  FiStmtsBase64,
}) => {
  console.log("validatevendorRegister");
  let isValid = true;
  let error = "";
  if (
    !validateJuristicID(JuristicID) ||
    JuristicID === "" ||
    JuristicID.length < 13 ||
    JuristicID.length > 13
  ) {
    error =
      "กรุณากรอกเลขประจำตัวผู้เสียภาษี หรือ รูปแบบเลขประจำตัวผู้เสียภาษีไม่ถูกต้อง";
    isValid = false;
  } else if (CompanyAdmin === "") {
    error = "กรุณากรอกชื่อบริษัทที่ต้องการขึ้นทะเบียน";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(CompanyNameEN) ||
    CompanyNameEN === ""
  ) {
    error = "กรุณากรอกชื่อบริษัทภาษาอังกฤษ";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(CompanyNameTH) ||
    CompanyNameTH === ""
  ) {
    error = "กรุณากรอกชื่อบริษัทภาษาไทย";
    isValid = false;
  } else if (!validateTextEngishAndNumberSpace(AddressEN) || AddressEN === "") {
    error = "กรุณากรอกที่อยู่ภาษาอังกฤษ";
    isValid = false;
  } else if (!validateNameThaiAndEnglish(AddressTH) || AddressTH === "") {
    error = "กรุณากรอกที่อยู่ภาษาไทย";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(NatureBusiness) ||
    NatureBusiness === ""
  ) {
    error = "กรุณากรอกลักษณะธุรกิจ";
    isValid = false;
  } else if (!validateWebsiteUrl(Website) || Website === "") {
    error = "กรุณากรอกเว็บไซต์";
    isValid = false;
  } else if (
    !validatePhone(Tel) ||
    Tel === "" ||
    Tel.length < 10 ||
    Tel.length > 10
  ) {
    error = "กรุณากรอกเบอร์โทรศัพท์";
    isValid = false;
  } else if (!validateNumber(Fax) || Fax === "") {
    error = "กรุณากรอกเบอร์แฟกซ์";
    isValid = false;
  } else if (!validateNameThaiAndEnglish(SaleName) || SaleName === "") {
    error = "กรุณากรอกชื่อผู้ขาย";
    isValid = false;
  } else if (
    !validateEmail(SaleEmail) ||
    SaleEmail === "" ||
    SaleEmail != VSaleEmail
  ) {
    error = "กรุณากรอกอีเมลผู้ขาย";
    isValid = false;
  } else if (
    ((!validatePhone(SaleTel) || SaleTel === "") && SaleTel.length < 10) ||
    SaleTel.length > 10 ||
    SaleTel != VSaleTel
  ) {
    error = "กรุณากรอกเบอร์โทรงานขาย";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(SaleManagerName) ||
    SaleManagerName === ""
  ) {
    error = "กรุณากรอกชื่อผู้จัดการขาย";
    isValid = false;
  } else if (
    !validateEmail(SaleManagerEmail) ||
    SaleManagerEmail === "" ||
    SaleManagerEmail != VSaleManagerEmail
  ) {
    error = "กรุณากรอกอีเมลผู้จัดการขาย";
    isValid = false;
  } else if (
    !validatePhone(SaleManagerTel) ||
    SaleManagerTel === "" ||
    SaleManagerTel.length < 10 ||
    SaleManagerTel.length > 10 ||
    SaleManagerTel != VSaleManagerTel
  ) {
    error = "กรุณากรอกเบอร์โทรผู้จัดการขาย";
    isValid = false;
  } else if (!validateNameThaiAndEnglish(AccountName) || AccountName === "") {
    error = "กรุณากรอกชื่อผู้ติดต่อบัญชี";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(AccountBankName) ||
    AccountBankName === ""
  ) {
    error = "กรุณากรอกชื่อธนาคาร";
    isValid = false;
  } else if (!validateNumber(AccountNo) || AccountNo === "") {
    error = "กรุณากรอกเลขที่บัญชี";
    isValid = false;
  } else if (!validateNameThaiAndEnglish(Branch) || Branch === "") {
    error = "กรุณากรอกสาขา";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(ContactPerson) ||
    ContactPerson === ""
  ) {
    error = "กรุณากรอกชื่อผู้ติดต่อ";
    isValid = false;
  } else if (
    !validatePhone(AccountTel) ||
    AccountTel === "" ||
    AccountTel.length < 10 ||
    AccountTel.length > 10 ||
    AccountTel != VAccountTel
  ) {
    error = "กรุณากรอกเบอร์โทรศัพท์";
    isValid = false;
  } else if (
    !validateEmail(AccountEmail) ||
    AccountEmail === "" ||
    AccountEmail != VAccountEmail
  ) {
    error = "กรุณากรอกอีเมล";
    isValid = false;
  } else if (Certificate.every(({ isChecked }) => isChecked == false)) {
    error = "กรุณาเลือกใบรับรองที่ได้รับ";
    isValid = false;
  } else if (Benefits.every(({ isChecked }) => isChecked == false)) {
    error = "กรุณาเลือกสิทธิประโยชน์ที่ได้รับ";
    isValid = false;
  } else if (IsSTDPacking == true && STDPackingBase64 == "") {
    error = "กรุณาแนบไฟล์มาตราฐานการบรรจุ";
    isValid = false;
  } else if (IsMOQ == true && MOQBase64 == "") {
    error = "กรุณาแนบไฟล์มาตราฐาน MOQ";
    isValid = false;
  } else if (
    VatLicenseBase64 == "" ||
    AffidavitBase64 == "" ||
    MapBase64 == "" ||
    BookBankBase64 == "" ||
    FiStmtsBase64 == "" ||
    BookMDBase64 == ""
  ) {
    error = "กรุณากรอกข้อมูล";
    isValid = false;
  }
  console.log("error", error);
  return { isValid, error };
};
