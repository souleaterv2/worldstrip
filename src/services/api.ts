import axios from "axios";

export const jsonSeverApi = axios.create({
  baseURL: "http://localhost:3004",
});
