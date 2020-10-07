import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import { useDispatch, useSelector } from "react-redux";
import { setHistoryList } from "../../redux/actions/list";

function History() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authentication);
  const list = useSelector((state) => state.list);
  const id = stateAuth.user.id;
  const token = stateAuth.auth;

  useEffect(() => {
    dispatch(setHistoryList(token, id));
  }, []);

  console.log(list);
  return (
    <SituationList
      header="Histórico de Movimentações"
      list={list}
      title
      token={token}
    />
  );
}

export default History;
