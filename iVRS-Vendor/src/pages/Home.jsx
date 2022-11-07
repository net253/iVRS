import React from "react";
import { Homepage, ButtonComponents } from "../components/Home";
import { fetchcompanylist } from "../services/feth-api";
import { useStoreCompanylist } from "../store";
import { Loadinglottie } from "../components/lottie";
import shallow from "zustand/shallow";
import useDoclist from "../store/Doclist/Doclist";
import {
  fetchdocumentlistpending,
  fetchdocumentlistdraft,
} from "../services/feth-api";

const Home = () => {
  const { updateCompanylist, companylist } = useStoreCompanylist(
    (state) => ({
      updateCompanylist: state.updateCompanylist,
      companylist: state.companylist,
    }),
    shallow
  );

  const { getDoclistPending, DoclistPending, getDoclistDraft, DoclistDraft } =
    useDoclist(
      (state) => ({
        getDoclistPending: state.getDoclistPending,
        DoclistPending: state.DoclistPending,
        getDoclistDraft: state.getDoclistDraft,
        DoclistDraft: state.DoclistDraft,
      }),
      shallow
    );

  function fetchFormPending() {
    fetchdocumentlistpending().then((data) => {
      getDoclistPending(data);
    });
  }

  function fetchFormDraft() {
    fetchdocumentlistdraft().then((data) => {
      getDoclistDraft(data);
    });
  }

  const getcompanylist = () => {
    fetchcompanylist().then((data) => {
      updateCompanylist(data);
    });
  };

  console.log("companylist", companylist);
  console.log("DoclistPending", DoclistPending);
  console.log("DoclistDraft", DoclistDraft);

  React.useEffect(() => {
    getcompanylist();
    const initpage = setInterval(() => {
      fetchFormPending();
      fetchFormDraft();
    }, 3000);
    const timer = setTimeout(() => {
      clearInterval(initpage);
    }, 10000);
    return () => {
      clearInterval(initpage);
      clearTimeout(timer);
    };
  }, []);

  if (companylist.length != 0 && DoclistPending.length != 0) {
    return (
      <>
        <Homepage />
        <ButtonComponents />
      </>
    );
  } else {
    return (
      <>
        <Loadinglottie />
        <ButtonComponents />
      </>
    );
  }
};

export default Home;
