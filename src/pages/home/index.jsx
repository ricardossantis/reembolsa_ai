import React from "react";

import Button from "../../components/main-page/home-button";
import ClientCard from "../../components/main-page/card-feed";
import Footer from "../../components/main-page/footer/index.jsx";
import ClientLogo from "../../components/main-page/client-logo";
import { GithubFilled } from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <ClientLogo logo1={<GithubFilled />} />

      <h1>pagina em construção</h1>

      <Button bckButton="#F1548D" />
      <ClientCard />
      <Footer children="Reembolsa.ai Soluções LTDA." />
    </>
  );
};

export default Home;
