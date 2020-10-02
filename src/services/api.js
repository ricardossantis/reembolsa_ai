import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1pY3Jvc29mdC5jb20iLCJpYXQiOjE2MDE2Njk5NTAsImV4cCI6MTYwMTY3MzU1MCwic3ViIjoiMTEifQ.gZihxF38gXnIOs-HGjfBh3afogRxDXYdrbnzlMFtQZo",
  },
});

export default api;
