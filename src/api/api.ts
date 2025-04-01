import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Create a base axios instance with default settings
const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage or your auth service
    const token = localStorage.getItem("auth_token");

    // If token exists, add it to all requests
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Add response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (401, 403, 500, etc.)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status } = error.response;

      if (status === 401) {
        // Unauthorized - clear auth data and redirect to login
        localStorage.removeItem("auth_token");
        // Redirect to login or dispatch auth error action
      }
    }

    return Promise.reject(error);
  },
);

// Generic GET request
export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(url, config);
  return response.data;
};

// Generic POST request
export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await api.post(url, data, config);
  return response.data;
};

// Generic PUT request
export const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await api.put(url, data, config);
  return response.data;
};

// Generic DELETE request
export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await api.delete(url, config);
  return response.data;
};

export default api;
