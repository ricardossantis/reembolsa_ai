import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "./hookWindowSize.js";
import { Dropdown } from "antd";
import {
  MaxHeader,
  MinHeader,
  ZLink,
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
        <ZLink to={props.link1} style={{ color: "#FFFFFF" }}>
          {props.title1}
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
    </ZMenu>
  );

  return (
    <div>
      {(width > 768 && (
        <MaxHeader style={{ backgroundColor: props.maxColor }}>
          <ZLink>{props.logo || props.input}</ZLink>
          <ZLink to={props.link1}>{props.title1}</ZLink>
          <ZLink to={props.link2}>{props.title2}</ZLink>
          <ZLink to={props.link3}>{props.title3}</ZLink>
          <ZLink onClick={props.logout}>{props.exit || props.homeButton}</ZLink>
        </MaxHeader>
      )) || (
        <MinHeader style={{ backgroundColor: props.minColor }}>
          <Dropdown overlay={menuHamburguer}>
            <Link onClick={(e) => e.preventDefault()}>
              <Hamburguer style={{ color: props.burguerColor }} />
            </Link>
          </Dropdown>
        </MinHeader>
      )}
    </div>
  );
};

export default Header;
