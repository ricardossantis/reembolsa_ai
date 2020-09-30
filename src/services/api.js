import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hjb21wYW55dGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjAxNDkwOTcwLCJleHAiOjE2MDE0OTQ1NzAsInN1YiI6IjIifQ.r27FHbX8cMYANpVOVSc6Zerl7sd4eOPCd9w6Hvv_Kqs",
  },
});

export default api;
