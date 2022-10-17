import React from "react";
import {
  Header,
  Company,
  Inputform,
  Contact,
  Statdard,
} from "../components/VendorReg";
import { Navbar } from "../components";

const vendor = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Inputform />
      <Company />
      <Contact />
      <Statdard />
    </>
  );
};

export default vendor;
