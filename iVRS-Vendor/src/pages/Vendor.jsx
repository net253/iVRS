import React, { useEffect } from "react";
import {
  Header,
  Company,
  Inputform,
  Contact,
  Statdard,
  Upload,
  Actionpolicy,
  SubmitDraft,
} from "../components/VendorReg";
import { Account, Headerpay } from "../components/Vendorpay";
import { useNavigate } from "react-router-dom";
import { Loadinglottie } from "../components/lottie";

const vendor = () => {
  const navigate = useNavigate();

  //create function detect refresh show confirm
  async function detectRefresh(e) {
    e.preventDefault();
    return (e.returnValue = "Are you sure you want to leave?");
  }

  useEffect(() => {
    window.addEventListener("beforeunload", detectRefresh, {
      capture: true,
    });
    return () => {
      window.removeEventListener("beforeunload", detectRefresh, {
        capture: true,
      });
    };
  }, []);

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

  return (
    <>
      <Header />
      <Inputform />
      <Company />
      <Contact />
      <Statdard />
      <Actionpolicy />
      <Headerpay />
      <Account />
      <Upload />
      <SubmitDraft />
    </>
  );
};

export default vendor;
