import axios from "axios";
// import type {AuthResponse} from "../models/auth/AuthResponse.ts";

export const API_URL = import.meta.env.VITE_API_URL;
const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

apiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
    } else {
      throw error;
    }
  },
);

export default apiInstance;
