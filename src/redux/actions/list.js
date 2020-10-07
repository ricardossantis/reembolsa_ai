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

export const setPendingList = (token, id) => (dispatch) => {
  api
    .get("/refunds", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      let list = res.data
        .filter((item) => item.userId === id)
        .map((item) => {
          if (item.status === "pending") {
            item.color = "#F2C94C";
            return item;
          }
          return undefined;
        })
        .filter((item) => item !== undefined);
      dispatch(yellowList(list));
    })
    .catch((err) => console.log(err));
};

const blueList = (list) => ({
  type: BLUE,
  list: list,
});

const yellowList = (list) => ({
  type: YELLOW,
  list: list,
});
