// import axios, { AxiosInstance } from "axios";
import axios from "axios";

// const apiClient: AxiosInstance = axios.create({
const httpRequest = axios.create({
  baseURL: "https://api.exchangerate.host/",
  timeout: 1000,
//   headers: {
//     "Content-type": "application/json",
//   },
});

export default httpRequest;