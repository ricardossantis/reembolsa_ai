import { LOGIN, ERROR, LOGOUT } from "../actions/auth";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const defaultState = {
  auth: token ? token : "",
  user: token ? user : {},
  err: "",
  success: "",
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: action.auth, err: "", success: "Bem vindo" };
    case ERROR:
      return { ...state, err: action.error };
    case LOGOUT:
      return { ...state, auth: "", err: "" };

    default:
      return state;
  }
};

export { authentication };
