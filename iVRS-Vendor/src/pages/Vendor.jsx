import React, { useEffect, useState } from "react";
import {
  Header,
  Company,
  Inputform,
  Contact,
  Statdard,
} from "../components/VendorReg";
import { useNavigate } from "react-router-dom";
import { Loadinglottie } from "../components/lottie";

const vendor = () => {
  const navigate = useNavigate();
  const checklocalstorafe = () => {
    if (!window.localStorage.isLoggedIn) {
      setTimeout(() => navigate("/"), 1000);
      return <Loadinglottie />;
    }
  };

  var waitTime = 30 * 60 * 1000;
  if (window.localStorage.isLoggedIn) {
    setTimeout(function () {
      console.log("clear");
      window.localStorage.clear();
      setTimeout(() => navigate("/"), 1000);
    }, waitTime);
  }

  useEffect(() => {
    const initPage = setTimeout(() => {
      checklocalstorafe();
    }, 100);
    const timer1m = setInterval(() => {
      checklocalstorafe();
    }, 2000);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer1m);
    };
  }, []);

  const [certificate, setCertificate] = useState({
    cerArray: [],
    other: "",
    payment: "",
    limit: "",
    currency: "",
    stdPacking: "",
    moq: "",
    stdPdf: [],
    moqPdf: [],
  });

  return (
    <>
      <Header />
      <Inputform />
      <Company />
      <Contact />
      <Statdard certificate={certificate} setCertificate={setCertificate} />
    </>
  );
};

export default vendor;
