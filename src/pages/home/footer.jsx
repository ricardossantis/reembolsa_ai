import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  return <ZFooter>{props.children}</ZFooter>;
};
export default Footer;

const ZFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  height: 97px;
  background-color: #365083;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;
