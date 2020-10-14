import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../../pages/home";

const ScrollDown = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 4000);
  }, [pathname]);

  return <Home />;
};

export default ScrollDown;
