import React from "react";
import { useWindowSize } from "../header/hookWindowSize.js";
import { MaxSearch, MinSearch } from "./input-style.js";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredEmployees } from "../../../redux/actions/list";
import { useHistory } from "react-router-dom";

const InputHeader = () => {
  const width = useWindowSize().width;
  let list = useSelector((state) => state.list);
  let dispatch = useDispatch();
  let history = useHistory();

  const onSearch = (value) => {
    history.replace("/colaboradores");
    list = list.filter((item) => item.fullName === value);
    dispatch(setFilteredEmployees(list));
  };
  return (
    <>
      {(width > 446 && (
        <MaxSearch placeholder="Busca pelo colaborador" onSearch={onSearch} />
      )) || (
        <MinSearch placeholder="Busca pelo colaborador" onSearch={onSearch} />
      )}
    </>
  );
};

export default InputHeader;
