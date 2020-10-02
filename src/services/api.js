import axios from "axios";

const api = axios.create({
  baseURL: "https://reembolsa-ai-api.herokuapp.com",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGx1YS5jb20iLCJpYXQiOjE2MDE2NjA1MDMsImV4cCI6MTYwMTY2NDEwMywic3ViIjoiMTAifQ.ycjfy4dsrZ4GcMfxSEV225eXaRvScHR6O3ruuatW-uY",
  },
});

export default api;
