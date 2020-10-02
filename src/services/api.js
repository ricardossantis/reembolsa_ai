import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFjZXNzb3JpYUBmbGFtZW5nby5jb20uYnIiLCJpYXQiOjE2MDE2NDk2MTIsImV4cCI6MTYwMTY1MzIxMiwic3ViIjoiMTMifQ.cfQv-4x6Y5kNrEKGAVME6d4gxJT8HZfZVUcAwnAKhPg",
  },
});

export default api;
