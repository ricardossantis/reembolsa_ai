import React from "react";
import { useWindowSize } from "../header/hookWindowSize.js";
import { MaxSearch, MinSearch } from "./input-style.js";

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
