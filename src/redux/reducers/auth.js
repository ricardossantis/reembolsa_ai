import { LOGIN, ERROR, LOGOUT } from "../actions/auth";


const defaultState = {
  auth: "",
  user: {},
  err: "",
};
const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: action.auth, user:action.user, err: ""};
    case ERROR:
      return { ...state, err: action.error };
    case LOGOUT:
      return { ...state, auth: "", err: "" };

    default:
      return state;
  }
};

export { authentication };
