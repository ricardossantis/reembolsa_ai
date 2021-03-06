import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NewUser from "../pages/new-user";
import ManagerHistory from "../pages/manager-history";
import ManagerPending from "../pages/manager-pending";
import Employees from "../pages/employees";
import EmployeesHistory from "../pages/employees-history";
import Saldo from "../pages/employees-balance";
import LoginPage from "../pages/login-page/";
import Header from "../components/system-general/header";
import Button from "../components/main-page/home-button";
import CadastroGerente from "../pages/new-manager/index";
import Home from "../pages/home";
import RefundRequest from "../pages/refund-request/index";
import ScrollDown from "../components/main-page/contact";
import { logout } from "../redux/actions/auth";
import Dashboard from "../pages/dashboard";
import LoadingAnimation from "../components/system-general/loading-animation/index"
import Logo from "../images/logo.png";
import InputHeader from "../components/system-general/input-header";

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
              title1="Dashboard"
              title2="Novo colaborador"
              title3="Pedidos pendentes"
              title4="Histórico"
              title5="Colaboradores"
              exit="Sair"
              exitManager="Sair"
              logout={() => dispatch(logout())}
              link1="/"
              link2="/novocolaborador"
              link3="/pedidospendentes"
              link4="/historicoempresa"
              link5="/colaboradores"
              input={<InputHeader />}
            />
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
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
              titleColab="Sair"
              exit="Sair"
              logoutColab={() => dispatch(logout())}
              logout={() => dispatch(logout())}
              link1="/novopedido"
              link2="/saldo"
              link3="/historicocolaborador"
              link4="/"
            />
            <Switch>
              <Route path="/novopedido">
                <RefundRequest />
              </Route>
              <Route path="/saldo">
                <Saldo />
              </Route>
              <Route path="/historicocolaborador">
                <EmployeesHistory />
              </Route>
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
          title1="Home"
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
            <ScrollDown />
          </Route>
        </Switch>
      </>
    );
  } else {
    return <LoadingAnimation/>;
  }
};

export default Routes;
