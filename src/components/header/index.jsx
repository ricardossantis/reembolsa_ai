import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const Header = () => {
  const width = useWindowSize().width;
  console.log(width, "my pretty windowSize");

  return (
    <div>
      {(width > 768 && (
        <MaxHeader>
          <div>testeHEADER</div>
          <div>teste2HEADER</div>
          <div>teste3HEADER</div>
        </MaxHeader>
      )) || <MinHeader></MinHeader>}
    </div>
  );
};

export default Header;

const MaxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 97px;
  color: #ffffff;
  font-size: 24px;
  background-color: #365083;

  div {
    margin-left: 50px;
  }
`;

const MinHeader = styled.div`
  width: 100%;
  height: 97px;
  background-color: #365083;
`;
