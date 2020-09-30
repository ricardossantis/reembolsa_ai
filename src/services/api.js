import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hjb21wYW55dGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjAxNDk1NDM1LCJleHAiOjE2MDE0OTkwMzUsInN1YiI6IjIifQ.Vb6evv5z9FYs24uoy07EsllRtjMKe2ca1KhNMbYYGKQ",
  },
});

export default api;
