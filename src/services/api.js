import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9jb21wYW55dGVzdGUyQGdtYWlsLmNvbSIsImlhdCI6MTYwMTY2NjcwMiwiZXhwIjoxNjAxNjcwMzAyLCJzdWIiOiIxNSJ9.bvFbH4GfrmMzfLqlMBcIom3NijBaEN1jEERfgkKLyLA",
  },
});

export default api;
