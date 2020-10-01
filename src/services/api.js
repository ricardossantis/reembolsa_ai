import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hjb21wYW55dGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjAxNTYwMTM2LCJleHAiOjE2MDE1NjM3MzYsInN1YiI6IjcifQ.e3u0SvCsOstIR0adpyFOOcfc5h2iZY3o2SZu_kX_4Kc",
  },
});

export default api;
