import React from "react";
import { Text } from "@chakra-ui/react";
import { HeaderPay, Account, Uploadvendor } from "../components/VendorPay";
import { useState } from "react";

export default function VendorPay() {
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
      <Text fontSize="3xl" fontWeight="bold">
        Payment Method
      </Text>
      <HeaderPay />
      <Account bankAccount={bankAccount} setBankAccount={setBankAccount} />
      <Uploadvendor bankAccount={bankAccount} />
    </>
  );
}
