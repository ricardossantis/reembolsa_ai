import React from "react";
import { useWindowSize } from "../header/hookWindowSize.js";
import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const InputHeader = () => {
  const width = useWindowSize().width;
  return (
    <>
      {(width > 446 && (
        <MaxSearch
          placeholder="Busca pelo colaborador"
          onSearch={(value) => console.log(value)}
        />
      )) || (
        <MinSearch
          placeholder="Busca pelo colaborador"
          onSearch={(value) => console.log(value)}
        />
      )}
    </>
  );
};

export default InputHeader;

const MaxSearch = styled(Search)`
  width: 240px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const MinSearch = styled(Search)`
  width: 200px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
