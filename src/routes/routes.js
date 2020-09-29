import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../services/api";
import ManagerHistory from "../pages/manager-history";
import ManagerPending from "../pages/manager-pending";

const Routes = () => {
  let history = useHistory();
  const [role, setRole] = useState("none");
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(false);
  }, []);

  if (auth === true) {
    switch (role) {
      case "manager":
        return (
          <Switch>
            <Route path="/novocolaborador">
              <div>novocolaborador</div>
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
    }
  } else if (auth === false) {
    return (
      <Switch>
        <Route exact path="/">
          <ManagerHistory />
        </Route>
        <Route exact path="/login">
          <ManagerPending />
        </Route>
        <Route exact path="/cadastro">
          <div>cadastro</div>
        </Route>
      </Switch>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Routes;
