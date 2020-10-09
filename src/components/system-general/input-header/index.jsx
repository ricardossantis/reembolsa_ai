import React from "react";
import { useWindowSize } from "../header/hookWindowSize.js";
import { MaxSearch, MinSearch } from "./input-style.js";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeList } from "../../../redux/actions/list";
import { useHistory } from "react-router-dom";

const InputHeader = () => {
  const width = useWindowSize().width;
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.id;
  const token = stateAuth.auth;
  let dispatch = useDispatch();
  let history = useHistory();

  const onSearch = (value) => {
    if (history.location.pathname) {
      history.replace("/colaboradores");
    }
    dispatch(setEmployeeList(token, id, value));
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
