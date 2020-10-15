import api from "../../services/api";


const postRequest = (
  token,
  values,
  employerId,
  employerName,
  setResponseStatus,
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
      setResponseStatus(response.status)
    })
    .catch((error) => {
      setResponseStatus(error.response.status);
    })
};

export default postRequest;
