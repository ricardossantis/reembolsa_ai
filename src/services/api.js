import axios from "axios";

const api = axios.create({
  baseURL: "/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQHBlZHJvLnBlZHJvIiwiaWF0IjoxNjAxNTc3NDEzLCJleHAiOjE2MDE1ODEwMTMsInN1YiI6IjExIn0.Mr4SGdtz3WSyH4wmq16h7iyf8X9okBlKDFxDizfU29Y",
  },
});

export default api;
