import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

const useWindowSize = () => {
  const initialState = {
    width: 0,
    height: 0,
  };

  const [windowSize, setWindowSize] = useState(initialState);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return windowSize;
};

const Header = (props) => {
  const width = useWindowSize().width;

  const menu = (
    <ZMenu>
      <MenuItem key="1" onClick={props.onClick1}>
        {props.title1}
      </MenuItem>
      <MenuItem key="2" onClick={props.onClick2}>
        {props.title2}
      </MenuItem>
      <MenuItem key="3" onClick={props.onClick3}>
        {props.title3}
      </MenuItem>
    </ZMenu>
  );

  return (
    <div>
      {(width > 768 && (
        <MaxHeader style={{ backgroundColor: props.maxColor }}>
          <ZLink>{props.logo || props.input}</ZLink>
          <ZLink onClick={props.onClick1}>{props.title1}</ZLink>
          <ZLink onClick={props.onClick2}>{props.title2}</ZLink>
          <ZLink onClick={props.onClick3}>{props.title3}</ZLink>
          <ZLink>{props.exit || props.homeButton}</ZLink>
        </MaxHeader>
      )) || (
        <MinHeader style={{ backgroundColor: props.minColor }}>
          <Dropdown overlay={menu}>
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

const MaxHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 97px;
  color: #ffffff;
  font-size: 24px;
`;

const MinHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 97px;
`;

const ZLink = styled(Link)`
  color: #ffffff;
  :hover {
    color: #2cd3b5;
  }
`;

const Hamburguer = styled(MenuOutlined)`
  margin-right: 1.5rem;
  font-size: 3rem;
  :hover {
    color: #2cd3b5;
  }
`;
const ZMenu = styled(Menu)`
  background-color: #365083;
`;

const MenuItem = styled(Menu.Item)`
  padding: 1.5rem;
  color: #ffffff;
  font-size: 24px;

  :hover {
    background-color: #f5f5f5;
    color: #365083;
  }
`;
