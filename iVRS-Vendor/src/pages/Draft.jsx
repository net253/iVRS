import React from "react";
import {
  HeaderDraft,
  CompanyDraft,
  InputformDraft,
  ContractDraft,
  StatdardDraft,
  UploadDraft,
  ActionpolicyDraft,
  AccountDraft,
  HeaderpayDraft,
  SubmitDraft,
} from "../components/Draft";
import { useNavigate } from "react-router-dom";
import { Loadinglottie } from "../components/lottie";
import useDraftEdit from "../store/DrafStore/DraftEdit";

const Draft = () => {
  const navigate = useNavigate();
  const draftEdit = useDraftEdit((state) => state.draftEdit);

  //create function detect refresh show confirm
  async function detectRefresh(e) {
    e.preventDefault();
    return (e.returnValue = "Are you sure you want to leave?");
  }

  React.useEffect(() => {
    window.addEventListener("beforeunload", detectRefresh, {
      capture: true,
    });
    return () => {
      window.removeEventListener("beforeunload", detectRefresh, {
        capture: true,
      });
    };
  }, []);

  console.log(Object.keys(draftEdit).length);

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

  React.useEffect(() => {
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

  if (window.localStorage.isLoggedIn && draftEdit.CompanyAdmin != "") {
    return (
      <>
        <HeaderDraft />
        <InputformDraft />
        <CompanyDraft />
        <ContractDraft />
        <StatdardDraft />
        <ActionpolicyDraft />
        <HeaderpayDraft />
        <AccountDraft />
        <UploadDraft />
        <SubmitDraft />
      </>
    );
  } else {
    setTimeout(() => navigate("/Home"), 2000);
    return <Loadinglottie />;
  }
};

export default Draft;
