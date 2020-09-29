import React from "react";
import Header from "../../components/header";
import Button from "../../components/home-button";
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
        homeButton={<Button bckButton="#2cbfd3"/>}
      />
      <br />
    
    </>
  );
};

export default Home;
