import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
});
