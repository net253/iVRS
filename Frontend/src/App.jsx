import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Login,
  VendorReg,
  VendorPay,
  Staff,
  VendorLogin,
  VendorRegister,
} from "./pages";
import ContentWarpper from "./components/warpper/ContentWarpper";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exect path="/" element={<Login />} />
      <Route path="/vendorlogin" element={<VendorLogin />} />
      <Route path="/vendorRegister" element={<VendorRegister />} />
      <Route
        path="/vendor"
        element={<ContentWarpper content={VendorReg} page="true" />}
      />
      <Route
        path="/paymethod"
        element={<ContentWarpper content={VendorPay} page="true" />}
      />
      <Route path="/Staff" element={<ContentWarpper content={Staff} />} />
    </Routes>
  );
}
