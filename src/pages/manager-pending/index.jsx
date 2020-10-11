import React, { useEffect } from "react";
import SituationList from "../../components/situation-list-page";
import { useDispatch, useSelector } from "react-redux";
import { setPendingList } from "../../redux/actions/list";

function Pending() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authentication);
  const list = useSelector((state) => state.list);
  const id = stateAuth.user.id;
  const token = stateAuth.auth;

  useEffect(() => {
    dispatch(setPendingList(token, id));
  }, []);

  return (
    <SituationList
      header="Pedidos Pendentes"
      list={list}
      title
      token={token}
      id={id}
    />
  );
}

export default Pending;
