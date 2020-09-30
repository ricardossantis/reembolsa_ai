import { useState, useEffect } from "react";

export const useWindowSize = () => {
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
