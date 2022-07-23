import React from "react";
import axios from "axios";

// 최초 작업자: 권능
// 2022-07-16
const AxiosService = axios.create({
  baseURL: "http://localhost:9150",
  timeout: 5000,
});

AxiosService.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      config.headers["Authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default AxiosService;
