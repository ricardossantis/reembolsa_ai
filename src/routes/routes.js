import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NewUser from "../pages/new-user";
import ManagerHistory from "../pages/manager-history";
import ManagerPending from "../pages/manager-pending";
import Employees from "../pages/employees";
import Saldo from "../pages/employees-balance";
import LoginPage from "../pages/login-page/";
import Header from "../components/system-general/header";
import Button from "../components/main-page/home-button";
import InputHeader from "../components/system-general/input-header";
import CadastroGerente from "../pages/new-manager/index";
import Home from "../pages/home";
import RefundRequest from "../components/refund-request";
import { logout } from "../redux/actions/auth";
import Logo from '../images/logo_preto.png'

const Routes = () => {
  const [role, setRole] = useState("none");
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(null);
  const stateAuth = useSelector((state) => state.authentication);

  useEffect(() => {
    if (stateAuth.auth === "") {
      setAuth(false);
    } else if (stateAuth.user.accessLevel === 1) {
      setRole("manager");
      setAuth(true);
    } else if (stateAuth.user.accessLevel === 2) {
      setRole("employee");
      setAuth(true);
    }
  }, [stateAuth]);

  if (auth === true) {
    switch (role) {
      case "manager":
        return (
          <>
            <Header
              maxColor="#365083"
              minColor="#F5F5F5"
              burguerColor="#365083"
              title1="Novo colaborador"
              title2="Pedidos pendentes"
              title3="Histórico"
              title4="Colaboradores"
              exit="Sair"
              logout={() => dispatch(logout())}
              link1="/novocolaborador"
              link2="/pedidospendentes"
              link3="/historicoempresa"
              link4="/colaboradores"
              input={<InputHeader />}
            />
            <Switch>
              <Route path="/novocolaborador">
                <NewUser />
              </Route>
              <Route path="/colaboradores">
                <Employees />
              </Route>
              <Route path="/pedidospendentes">
                <ManagerPending />
              </Route>
              <Route path="/historicoempresa">
                <ManagerHistory />
              </Route>
            </Switch>
          </>
        );

      case "employee":
        return (
          <>
            <Header
              maxColor="#365083"
              minColor="#F5F5F5"
              burguerColor="#365083"
              title1="Novo pedido"
              title2="Saldo"
              title3="Histórico"
              exit="Sair"
              logout={() => dispatch(logout())}
              link1="/novopedido"
              link2="/saldo"
              link3="/historicocolaborador"
            />
            <Switch>
              <Route path="/novopedido">
                <RefundRequest />
              </Route>
              <Route path="/saldo">
                <Saldo />
              </Route>
              <Route path="/historicocolaborador"></Route>
            </Switch>
          </>
        );
    }
  } else if (auth === false) {
    return (
      <>
        <Header
          maxColor="#365083"
          minColor="#365083"
          burguerColor="#FFFFFF"
          title2="Cadastro"
          title3="Login"
          title4="Contato"
          link2="/cadastro"
          link3="/login"
          link4="/contato"
          home="/"
          logo={Logo}
          homeButton={<Button bckButton="#2CBFD3" />}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/cadastro">
            <CadastroGerente />
          </Route>
          <Route exact path="/contato">
            <div>contato</div>
          </Route>
        </Switch>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Routes;
