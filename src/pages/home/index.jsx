import React from "react";
import Banner from "../../components/main-page/banner";
import Button from "../../components/main-page/home-button";
import ClientCard from "../../components/main-page/card-feed";
import Footer from "../../components/main-page/footer/index.jsx";
import ClientLogo from "../../components/main-page/client-logo";
import MainTimeline from "../../components/main-page/timeline";
import Title from "../../components/main-page/title";
import HireUs from "../../components/main-page/our-services";
import CancelButton from "../../components/system-general/cancel-button";
import { GithubFilled } from "@ant-design/icons";

const Home = () => {
  return (
    <>
     
      <Banner
        bannerTxt1="Lorem Ipsum"
        bannerTxt2="has been the"
        info1="Somos uma empresa que facilitará os exaustivos procedimentos de reembolso dos seus colaboradores."
        info2="Sed lorem purus, condimentum vel volutpat at, feugiat ut arcu. Donec pharetra tristique velit."
        info3="Sed lorem purus, condimentum vel volutpat at, feugiat ut arcu."
      />
      <Title bckTitle="#365083" colorTitle="#FFFFFF" children="Depoimentos" />
     
      <ClientCard />
      <Title
        bckTitle="#FFFFFF"
        colorTitle="#365083"
        children="Nossa solução para sua empresa: "
      />
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
      <Title
        bckTitle="#365083"
        colorTitle="#FFFFFF"
        children="Conheça nossos parceiros de sucesso"
      />
      <ClientLogo logo1={<GithubFilled />} />
      <Title
        bckTitle="#FFFFFF"
        colorTitle="#365083"
        children="Contrate nossos serviços"
      />
      <HireUs
        text1="Contato"
        text2="R. General Mario Tourinho, 1733 - 706, Seminário, Curitiba/PR"
        text3="0800-000-000"
        text4="contato@reembolsai.com.br"
      />
      <Footer children="Reembolsa.ai Soluções LTDA." />
    </>
  );
};

export default Home;
