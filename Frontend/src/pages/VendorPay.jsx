import React from "react";
import { Text } from "@chakra-ui/react";
import { HeaderPay, Account, Uploadvendor } from "../components/VendorPay";

export default function VendorPay() {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Payment Method
      </Text>
      <HeaderPay />
      <Account />
      <Uploadvendor />
    </>
  );
}
