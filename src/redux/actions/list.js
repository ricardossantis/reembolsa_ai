import api from "../../services/api";

export const BLUE = "BLUE";
export const YELLOW = "YELLOW";
export const RAINBOW = "RAINBOW";

export const setEmployeeList = (token, id) => (dispatch) => {
  api
    .get("/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      let list = res.data
        .filter((item) => item.userId === id)
        .map((item) => {
          item.color = "#365083";
          return item;
        });
      dispatch(blueList(list));
    })
    .catch((err) => console.log(err));
};

const blueList = (list) => ({
  type: BLUE,
  list: list,
});
