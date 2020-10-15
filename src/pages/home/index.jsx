import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/main-page/banner";
import ClientCard from "../../components/main-page/card-feed";
import Footer from "../../components/main-page/footer/index.jsx";
import ClientLogo from "../../components/main-page/client-logo";
import MainTimeline from "../../components/main-page/timeline";
import Title from "../../components/main-page/title";
import HireUs from "../../components/main-page/our-services";
import Kenzie from "../../images/kenzie-logo.png";
import Google from "../../images/google.png";
import Philips from "../../images/philips.jpg";
import Amazon from "../../images/amazon.png";
import { motion } from "framer-motion";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Banner
          bannerTxt1="Otimizando processos de "
          bannerTxt2="maneira intuitiva e simples"
          info1="Controle de reembolsos de maneira mais simples."
          info2="Sistema fácil e intuitivo, sem necessidade de instalação de aplicativos."
          info3="Venha fazer parte deste jeito simples e direto de reembolsar seus colaboradores."
        />
        <Title bckTitle="#365083" colorTitle="#FFFFFF" children="Depoimentos" />

        <ClientCard />
        <Title
          bckTitle="#F5F5F5"
          colorTitle="#365083"
          children="Nossa solução para sua empresa: "
        />
        <MainTimeline
          item1="Controle de reembolso por colaborador."
          item2="Gestão simplificada de saldo."
          item3="Timeline com o circuito de aprovação."
          item4="Comandos intuitivos."
          item5="Gráficos simples que ajudam na visualização dos valores."
          item6="Acesso nos principais navegadores da atualidade."
          item7="Fácil ingresso por smatphone ou tablet."
          item8="Não precisa instalar aplicativos."
          item9="Qualquer um pode usar, basta ter conexão com a internet."
          item10="Disponível 24 horas por dia."
        />
        <Title
          bckTitle="#365083"
          colorTitle="#FFFFFF"
          children="Conheça nossos parceiros de sucesso"
        />
        <ClientLogo
          logo1={Kenzie}
          logo2={Google}
          logo3={Amazon}
          logo4={Philips}
        />
        <Title
          bckTitle="#F5F5F5"
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
      </motion.div>
    </>
  );
};

export default Home;
