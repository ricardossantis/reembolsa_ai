import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWcuYm93c2VyQG5pbnRlbmRvLmNvbSIsImlhdCI6MTYwMTYxMzAzMSwiZXhwIjoxNjAxNjE2NjMxLCJzdWIiOiIxMiJ9.e7hrbYSAUlvhKV0X9OgCUn8n5dPlHtex8wXbqGLzzAo",
  },
});

export default api;
