import {
  validateEmail,
  validatePhone,
  validateNameThaiAndEnglish,
  //validateThaiText,
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
  SaleManagerName,
  SaleTel,
  SaleManagerEmail,
  SaleManagerTel,
  AccountName,
  AccountBankName,
  AccountNo,
  Branch,
  ContactPerson,
  AccountTel,
  AccountEmail,
  Certificate,
}) => {
  console.log("validatevendorRegister");
  let isValid = true;
  let error = "";
  if (!validateNumber(JuristicID)) {
    error = "กรุณากรอกเลขประจำตัวผู้เสียภาษี";
    isValid = false;
  } else if (!validateNameThaiAndEnglish(CompanyAdmin) || CompanyAdmin === "") {
    error = "กรุณากรอกชื่อผู้ประสานงาน";
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
  } else if (!validateNameThaiAndEnglish(AddressEN) || AddressEN === "") {
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
  } else if (!validateNameThaiAndEnglish(Website) || Website === "") {
    error = "กรุณากรอกเว็บไซต์";
    isValid = false;
  } else if (!validatePhone(Tel) || Tel === "") {
    error = "กรุณากรอกเบอร์โทรศัพท์";
    isValid = false;
  } else if (!validatePhone(Fax) || Fax === "") {
    error = "กรุณากรอกเบอร์แฟกซ์";
    isValid = false;
  } else if (!validateNameThaiAndEnglish(SaleName) || SaleName === "") {
    error = "กรุณากรอกชื่อผู้ขาย";
    isValid = false;
  } else if (!validateEmail(SaleEmail) || SaleEmail === "") {
    error = "กรุณากรอกอีเมลผู้ขาย";
    isValid = false;
  } else if (!validatePhone(SaleTel) || SaleTel === "") {
    error = "กรุณากรอกเบอร์โทรผู้ขาย";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(SaleManagerName) ||
    SaleManagerName === ""
  ) {
    error = "กรุณากรอกชื่อผู้จัดการขาย";
    isValid = false;
  } else if (!validateEmail(SaleManagerEmail) || SaleManagerEmail === "") {
    error = "กรุณากรอกอีเมลผู้จัดการขาย";
    isValid = false;
  } else if (!validatePhone(SaleManagerTel) || SaleManagerTel === "") {
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
  } else if (!validateNameThaiAndEnglish(AccountNo) || AccountNo === "") {
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
  } else if (!validatePhone(AccountTel) || AccountTel === "") {
    error = "กรุณากรอกเบอร์โทรศัพท์";
    isValid = false;
  } else if (!validateEmail(AccountEmail) || AccountEmail === "") {
    error = "กรุณากรอกอีเมล";
    isValid = false;
  } else if (
    !validateNameThaiAndEnglish(Certificate) ||
    Certificate.length == 0
  ) {
    error = "กรุณากรอกใบรับรอง";
    isValid = false;
  }
  console.log("error", error);
  return { isValid, error };
};
