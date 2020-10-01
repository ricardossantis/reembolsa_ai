import React from "react";
import Button from "../../components/main-page/home-button";
import ClientCard from "../../components/main-page/card-feed";
import Footer from "../../components/main-page/footer/index.jsx";
import ClientLogo from "../../components/main-page/client-logo";
import MainTimeline from "../../components/main-page/timeline";
import { GithubFilled } from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <ClientLogo logo1={<GithubFilled />} />
      <MainTimeline
        item1="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item2="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item3="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item4="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item5="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item6="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item7="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item8="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item9="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
        item10="Oferecemos um controle de reembolso para sua empresa. Não pode escrever mais do que isso."
      />
      <h1>pagina em construção</h1>

      <Button bckButton="#F1548D" />
      <ClientCard />

      <Footer children="Reembolsa.ai Soluções LTDA." />
    </>
  );
};

export default Home;
