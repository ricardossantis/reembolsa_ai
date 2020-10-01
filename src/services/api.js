import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hjb21wYW55dGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjAxNTU1NjU0LCJleHAiOjE2MDE1NTkyNTQsInN1YiI6IjcifQ.uTiXFf8lK7ncqTwG3xc2l37NBp_OwAuzUBgvwS2VJ1I",
  },
});

export default api;
