import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1pY3Jvc29mdC5jb20iLCJpYXQiOjE2MDE2NjQ2MDQsImV4cCI6MTYwMTY2ODIwNCwic3ViIjoiMTEifQ.2L4Fux-yDsszd9UZ2qiYYUCYtAl3_t7V_dONTScmOCA",
  },
});

export default api;
