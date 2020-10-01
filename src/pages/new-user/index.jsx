import React, { useState } from "react";
import api from "../../services/api";

const NewUser = () => {
  const [serverResponse, setServerResponse] = useState();

  return (
    <div>
      <h1>Novo usuário</h1>
      <button
        onClick={() =>
          api.post("/register", {
            email: "dev2@tech.com",
            password: "123456",
            "full-name": "dev",
            user: "dev2",
            "access-level": 2,
            roll: "fullstack",
            "amount-limit": 300,
          })
        }
      >
        request register
      </button>
    </div>
  );
};

export default NewUser;
