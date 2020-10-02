import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../services/api";
import styled from "styled-components";
import NewUser from "../pages/new-user";

const Routes = () => {
  let history = useHistory();
  const [role, setRole] = useState("manager"); //retornar para none

  switch (role) {
    case "manager":
      return (
        <Switch>
          <Route path="/novocolaborador">
            <NewUser />
          </Route>
          <Route path="/pedidospendentes">
            <div>pedidospendentes</div>
          </Route>
          <Route path="/historico">
            <div>historicogerente</div>
          </Route>
        </Switch>
      );

    case "employee":
      return (
        <Switch>
          <Route path="/novopedido">
            <div>novopedido</div>
          </Route>
          <Route path="/pedidospendentes">
            <div>saldo</div>
          </Route>
          <Route path="/historico">
            <div>historicocolaborador</div>
          </Route>
        </Switch>
      );

    case "none":
      return (
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route exact path="/login">
            <div>Login</div>
          </Route>
          <Route exact path="/cadastro">
            <div>cadastro</div>
          </Route>
        </Switch>
      );

    default:
      return <div>Loading</div>;
  }
};

export default Routes;
