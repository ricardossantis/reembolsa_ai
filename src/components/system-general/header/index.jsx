import React from "react";
import { useWindowSize } from "./hookWindowSize.js";
import { Dropdown } from "antd";
import {
  MaxHeader,
  MinHeader,
  ZLink,
  LogoLink,
  MLink,
  Hamburguer,
  ZMenu,
  MenuItem,
} from "./header-style.js";

const Header = (props) => {
  const width = useWindowSize().width;

  const menuHamburguer = (
    <ZMenu>
      <MenuItem key="1">
        <ZLink to={props.link1 || props.home} style={{ color: "#FFFFFF" }}>
          {width <= 1066 ? props.title1 : props.logo}
        </ZLink>
      </MenuItem>
      <MenuItem key="2">
        <MLink to={props.link2} style={{ color: "#FFFFFF" }}>
          {props.title2}
        </MLink>
      </MenuItem>
      <MenuItem key="3">
        <MLink to={props.link3} style={{ color: "#FFFFFF" }}>
          {props.title3}
        </MLink>
      </MenuItem>
      <MenuItem key="4">
        <MLink
          to={props.link4}
          onClick={props.logoutColab}
          style={{ color: "#FFFFFF" }}
        >
          {props.title4 || props.titleColab}
        </MLink>
      </MenuItem>
      {props.link5 && (
        <MenuItem key="5">
          <MLink to={props.link5} style={{ color: "#FFFFFF" }}>
            {props.title5}
          </MLink>
        </MenuItem>
      )}
      {props.exitManager && (
        <MenuItem key="6">
          <MLink to="/" onClick={props.logout} style={{ color: "#FFFFFF" }}>
            {props.exitManager}
          </MLink>
        </MenuItem>
      )}
    </ZMenu>
  );

  return (
    <>
      {(width > 1066 && (
        <MaxHeader style={{ backgroundColor: props.maxColor }}>
          {props.input}
          {props.logo && (
            <LogoLink to={props.home || "/"}>
              <img src={props.logo} alt="logo" />
            </LogoLink>
          )}

          <ZLink to={props.link1 || "/"}>{props.title1}</ZLink>
          <ZLink to={props.link2}>{props.title2}</ZLink>
          <ZLink to={props.link3}>{props.title3}</ZLink>
          <ZLink to={props.link4}>{props.title4}</ZLink>
          {props.link5 && <ZLink to={props.link5}>{props.title5}</ZLink>}
          <ZLink to="/login" onClick={props.logout} />
          <ZLink to={props.exit ? "/" : "/cadastro"} onClick={props.logout}>
            {props.exit || props.homeButton}
          </ZLink>
        </MaxHeader>
      )) || (
        <MinHeader style={{ backgroundColor: props.minColor }}>
          {props.input}
          <Dropdown overlay={menuHamburguer}>
            <Hamburguer style={{ color: props.burguerColor }} />
          </Dropdown>
        </MinHeader>
      )}
    </>
  );
};

export default Header;
