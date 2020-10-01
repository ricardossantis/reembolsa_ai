import axios from "axios";
import jwt_decode from "jwt-decode";
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
      const token = response.data.accessToken;
      const decoded = jwt_decode(token);
      const id = decoded.sub;
      localStorage.setItem("token", token);
      axios
        .get("https://reembolsa-ai-api.herokuapp.com/users/" + id, {
          headers: { authorization: "Bearer " + token },
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch(login(token, response.data));
        });
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
