import api from "../../services/api";

const postRequest = (
  token,
  values,
  employerId,
  employerName,
  setStatusResponse
) => {
  api
    .post(
      "/register",
      {
        ...values,
        accessLevel: 2,
        userId: employerId,
        company: employerName,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      },
      
    )
    .then((response) => {
      if (response.status === 200) {
        return setStatusResponse(response.status);
      } else if (response.status === 400) {
        setStatusResponse(response.status);
      } else if (response.status === 500) {
        setStatusResponse(response.status);
      }
    });
};

export default postRequest;
