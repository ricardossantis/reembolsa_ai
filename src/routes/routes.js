import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../services/api";
import styled from "styled-components";
import NewUser from "../pages/new-user";
import LoginPage from "../pages/login-page/index";
import Header from "../components/header";
import Button from "../components/home-button";
import InputHeader from "../components/input";
import Home from "../pages/home";

const Routes = () => {
  let history = useHistory();
  const [role, setRole] = useState("manager"); //retornar para none

  switch (role) {
    case "manager":
      return (
        <>
          <Header
            maxColor="#365083"
            minColor="F5F5F5"
            burguerColor="#365083"
            title1="Novo colaborador"
            title2="Pedidos pendentes"
            title3="Histórico"
            exit="Sair"
            logout={() => setRole("none")}
            link1="/novocolaborador"
            link2="/pedidospendentes"
            link3="/historico"
          />
          <Switch>
            <Route path="/novocolaborador"></Route>
            <Route path="/pedidospendentes"></Route>
            <Route path="/historico"></Route>
          </Switch>
        </>
      );

    case "employee":
      return (
        <>
          <Header
            maxColor="#365083"
            minColor="F5F5F5"
            burguerColor="#365083"
            title1="Novo pedido"
            title2="Saldo"
            title3="Histórico"
            exit="Sair"
            logout={() => setRole("none")}
            link1="/novopedido"
            link2="/saldo"
            link3="/historico"
          />
          <Switch>
            <Route path="/novopedido">
              <div>novopedido</div>
            </Route>
            <Route path="/saldo">
              <div>saldo</div>
            </Route>
            <Route path="/historico"></Route>
          </Switch>
        </>
      );

    case "none":
      return (
        <>
          <Header
            maxColor="#365083"
            minColor="#365083"
            burguerColor="#FFFFFF"
            title1="Cadastro"
            title2="Login"
            title3="Contato"
            link1="/cadastro"
            link2="/login"
            link3="contato"
            homeButton={<Button bckButton="#2cbfd3" />}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/cadastro">
              <div>cadastro</div>
            </Route>
          </Switch>
        </>
      );

    default:
      return <div>Loading</div>;
  }
};

export default Routes;
