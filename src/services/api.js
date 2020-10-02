import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWcuYm93c2VyQG5pbnRlbmRvLmNvbSIsImlhdCI6MTYwMTYwNDA5MywiZXhwIjoxNjAxNjA3NjkzLCJzdWIiOiIxMiJ9.w859rDgBvdCIWgv3Dd4ZVUKJ1NliPeHyKwzACMoMdHY",
  },
});

console.log(axios.getResponse);

export default api;
