import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyaXN0aW5lQGNyaXN0aW5lLmNvbSIsImlhdCI6MTYwMTYzNjA2MCwiZXhwIjoxNjAxNjM5NjYwLCJzdWIiOiIxMCJ9.FQVN0AowPsRiv_R-l8qdQ5Kpxwxuz4Kg_S86dzirAv4",
  },
});

export default api;
