import React from "react";
import Header from "../../components/header";
const Home = () => {
  return (
    <>
      <Header
        maxColor="#365083"
        minColor="#365083"
        burguerColor="#FFFFFF"
        title1="Cadastro"
        title2="Login"
        title3="Contato"
        onClick1={() => console.log("rota cadastro")}
        onClick2={() => console.log("rota login")}
        onClick3={() => console.log("rota contato")}
      />
    </>
  );
};

export default Home;
