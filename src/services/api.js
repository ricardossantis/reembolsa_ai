import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBsZXVzZXIxQHNhbXBsZS5jb20iLCJpYXQiOjE2MDE1NjIwOTMsImV4cCI6MTYwMTU2NTY5Mywic3ViIjoiMiJ9.3EhvCDc4hmUCIQxy-TMJrbUmSPi3ScVr0XLi7PMieEw",
  },
});

console.log(axios.getResponse);

export default api;
