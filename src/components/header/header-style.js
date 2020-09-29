import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const MaxHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 97px;
  color: #ffffff;
  font-size: 24px;
`;

export const MinHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 97px;
`;

export const ZLink = styled(Link)`
  color: #ffffff;
  :hover {
    color: #2cd3b5;
  }
`;
export const MLink = styled(Link)`
  color: #ffffff;
`;

export const Hamburguer = styled(MenuOutlined)`
  margin-right: 1.5rem;
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
    background-color: #2CD3B5;
  }
`;
