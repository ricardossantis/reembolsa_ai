import React from "react";

import Button from "../../components/home-button";
import ClientCard from "../../components/card-feed";
import Footer from "./footer.jsx";
import SystemButton from "../../components/system-button";
const Home = () => {
  return (
    <>
      <ClientCard />

      <SystemButton
        cancel={() => console.log("botão de cancelar")}
        confirm={() => console.log("botão de confirmar")}
      />
      <br />
      <Footer children="Reembolsa.ai Soluções LTDA." />
    </>
  );
};

export default Home;
