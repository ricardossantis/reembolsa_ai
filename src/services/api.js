import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlMy5jb20iLCJpYXQiOjE2MDE1ODI5NTgsImV4cCI6MTYwMTU4NjU1OCwic3ViIjoiMTUifQ.h78BsqowBZljeWJ2j635pWf1Oracpu8ZAj7ENLWoY8w",
  },
});

export default api;
