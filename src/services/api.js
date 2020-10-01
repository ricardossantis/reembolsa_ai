import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbWFzQHR1cmJvLmNvbSIsImlhdCI6MTYwMTQ5OTE1OCwiZXhwIjoxNjAxNTAyNzU4LCJzdWIiOiIzIn0.S8BhxuN6rphItJfPYxJCK30q_9Lw6ZgExqPtEdA1DEU",
  },
});

console.log(axios.getResponse);

export default api;
