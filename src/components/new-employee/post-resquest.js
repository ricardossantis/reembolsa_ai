import api from "../../services/api";

const postRequest = (values, employerId, employerName, setStatusResponse) => {
  api
    .post("/register", {
      ...values,
      accessLevel: 2,
      userId: employerId,
      company: employerName,
    })
    .then((response) => {
      console.log(response.data);
      console.log(response.status);

      if (response.status === 200) {
        return setStatusResponse(response.status);
      } else if (response.status === 400) {
        setStatusResponse(response.status);
      } else if (response.status === 500) {
        setStatusResponse(response.status);
      }
    });
  console.log("Received values of form: ", values);
};

export default postRequest;
