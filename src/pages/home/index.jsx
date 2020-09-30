import React from "react";

import Button from "../../components/home-button";
import ClientCard from "../../components/card-feed";
import Footer from "./footer.jsx";
const Home = () => {
  return (
    <>
      <ClientCard />
      <Footer children="Reembolsa.ai Soluções LTDA." />
    </>
  );
};

export default Home;
