import React, { useState } from "react";
import { Account, Headerpay, Upload } from "../components/Vendorpay";
const Vendorpay = () => {
  const [bankAccount, setBankAccount] = useState({
    accountName: "",
    accountNo: "",
    bank: "",
    otherBank: "",
    branch: "",
    contact: "",
    tel: "",
    VTel: "",
    email: "",
    VEmail: "",
  });

  return (
    <>
      <Headerpay />
      <Account bankAccount={bankAccount} setBankAccount={setBankAccount} />
      <Upload bankAccount={bankAccount} />
    </>
  );
};

export default Vendorpay;
