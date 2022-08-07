import axios from "axios";

const fireBaseApi = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://recruitment-platform.vercel.app/api/"
});

export default fireBaseApi
