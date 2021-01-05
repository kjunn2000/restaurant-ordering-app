import axios from "axios";
import LocalStorageService from "../localStorage/LocalStorageService";

// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    if (config.url.startsWith("http://localhost:8080/")) {
      const token = localStorageService.getAuthorizationToken();
      console.log(token);
      if (token) {
        config.headers["Authorization"] = token;
      }
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
