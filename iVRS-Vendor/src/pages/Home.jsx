import React from "react";
import { Homepage, ButtonComponents } from "../components/Home";
import { fetchcompanylist } from "../services/feth-api";
import { useStoreCompanylist } from "../store";

const Home = () => {
  const { updateCompanylist } = useStoreCompanylist();
  const getcompanylist = () => {
    fetchcompanylist().then((data) => {
      updateCompanylist(data);
    });
  };

  React.useEffect(() => {
    getcompanylist();
  }, []);

  return (
    <>
      <Homepage />
      <ButtonComponents />
    </>
  );
};

export default Home;
