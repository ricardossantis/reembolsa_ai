import React, { useEffect } from "react";
import SituationList from "../../components/situation-list-page";
import { useDispatch, useSelector } from "react-redux";
import { setPendingList } from "../../redux/actions/list";
import { motion } from "framer-motion";

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <SituationList
        header="Pedidos Pendentes"
        list={list}
        title
        token={token}
        id={id}
      />
    </motion.div>
  );
}

export default Pending;
