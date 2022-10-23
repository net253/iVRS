import React, { useEffect, useState } from "react";
import {
  Header,
  Company,
  Inputform,
  Contact,
  Statdard,
  Upload,
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

  const [registor, setReistor] = useState("");
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

  const [company, setCompany] = useState({
    engCompany: "",
    thaiCompany: "",
    engAddress: "",
    thaiAddress: "",
    natureBusiness: "",
    companyWeb: "",
    tel: "",
    fax: "",
  });
  console.log(company);
  const [contact, setContact] = useState({
    salesName: "",
    salesEmail: "",
    salesTel: "",
    salesVEmail: "",
    salesVTel: "",
    managerName: "",
    managerEmail: "",
    managerTel: "",
    managerVEmail: "",
    managerVTel: "",
    othersName: "",
    othersEmail: "",
    othersTel: "",
    othersVEmail: "",
    othersVTel: "",
  });

  return (
    <>
      <Header />
      <Inputform setReistor={setReistor} registor={registor} />
      <Company setCompany={setCompany} company={company} />
      <Contact setContact={setContact} contact={contact} />
      <Statdard certificate={certificate} setCertificate={setCertificate} />
      <Upload
        registor={registor}
        company={company}
        contact={contact}
        certificate={certificate}
      />
    </>
  );
};

export default vendor;
