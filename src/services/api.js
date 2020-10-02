import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWcuYm93c2VyQG5pbnRlbmRvLmNvbSIsImlhdCI6MTYwMTYwOTI2NiwiZXhwIjoxNjAxNjEyODY2LCJzdWIiOiIxMiJ9.1HN_tqgtoLqdGb5573f68hh-vbbL8JN9TF5M8AzVGbI",
  },
});

export default api;
