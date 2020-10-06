import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const MaxHeader = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 97px;
  color: #ffffff;
  font-size: 24px;
`;

export const MinHeader = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  height: 97px;
`;

export const ZLink = styled(Link)`
  color: #ffffff;
  :hover {
    color: #2cd3b5;
  }
`;
export const LogoLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");
  font-family: "Cinzel", serif;
  text-decoration-line: underline;
  color: #ffffff;
  :hover {
    text-decoration-line: underline;
    color: #2cd3b5;
  }
`;
export const MLink = styled(Link)`
  color: #ffffff;
`;

export const Hamburguer = styled(MenuOutlined)`
  font-size: 3rem;
  :hover {
    color: #2cd3b5;
  }
`;
export const ZMenu = styled(Menu)`
  background-color: #365083;
`;

export const MenuItem = styled(Menu.Item)`
  padding: 1.5rem;
  color: #ffffff;
  font-size: 24px;

  :hover {
    background-color: #2cd3b5;
  }
`;
