import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hjb21wYW55dGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjAxNDk5MDgyLCJleHAiOjE2MDE1MDI2ODIsInN1YiI6IjIifQ.sfAkJN6g_MSI5vWydCU8KKSWCn8p5O3ZdmFZyY6onSg",
  },
});

export default api;
