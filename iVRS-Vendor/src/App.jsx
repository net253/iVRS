import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Loginpages, Registerpages, Vendorpage } from "./pages";
import ContentWrapper from "./components/wrapper/ContentWarpper";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ContentWrapper content={Loginpages} />} />
          <Route
            path="/Register"
            element={<ContentWrapper content={Registerpages} />}
          />
          <Route
            path="/Vendor"
            element={<ContentWrapper content={Vendorpage} page="true" />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
