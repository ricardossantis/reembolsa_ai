import axios from "axios";
export const LOGIN = "LOGIN";
export const ERROR = "ERROR";
export const LOGOUT = "LOGOUT";

export const resquestLogin = ({ email, password }) => (dispatch) => {
  axios
    .post("https://reembolsa-ai-api.herokuapp.com/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.accessToken);
      dispatch(login(response.data.accessToken));
    })
    .catch(({ response: { data: { error } } }) => dispatch(err(error)));
};

const login = (token) => ({
  type: LOGIN,
  auth: token,
});
export const logout = () => ({
  type: LOGOUT,
});

const err = () => ({
  type: ERROR,
  error: "Verifique as informações de entrada",
});
