import api from "../../services/api";


const postRequest = (
  token,
  values,
  employerId,
  employerName,
  setStatus
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
      setStatus(response.status)
    })
    .catch((error) => setStatus(error.response.status))
  
    //.catch(({ response: { data: { error } } }) => console.log(error));
};

export default postRequest;
