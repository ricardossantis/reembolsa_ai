import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeList } from "../../redux/actions/list";

function Employees() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authentication);
  const list = useSelector((state) => state.list);
  const id = stateAuth.user.id;
  const token = stateAuth.auth;

  useEffect(() => {
    dispatch(setEmployeeList(token, id));
  }, []);

  console.log(list);

  return (
    <SituationList header="Colaboradores" list={list} token={token} id={id} />
  );
}

export default Employees;
