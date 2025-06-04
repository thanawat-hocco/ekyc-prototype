import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { localStorageAction } from './localStorageService';
import { Response } from './Models';

export type CustomConfig = InternalAxiosRequestConfig & {
  isPublicAuth?: boolean;
};

const AxiosClient = axios.create({
  baseURL: process.env.BASE_URL_API,
});

//manage interceptors request
AxiosClient.interceptors.request.use(
  (config: CustomConfig) => {
    const token = localStorageAction('get', 'ACCESS_TOKEN');

    if (config.isPublicAuth) {
      config.headers['Authorization'] = ``;
    } else {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return { ...config };
  },
  (error) => Promise.reject(error),
);

export function http() {
  return {
    async get<U>(url: string, config?: Partial<CustomConfig>): Promise<AxiosResponse<Response<U>>> {
      return AxiosClient.get<Response<U>>(url, config);
    },
    async post<T, U>(url: string, data?: T, config?: Partial<CustomConfig>): Promise<AxiosResponse<Response<U>>> {
      return AxiosClient.post<Response<U>>(url, data, config);
    },
    async put<T, U>(url: string, data?: T, config?: Partial<CustomConfig>): Promise<AxiosResponse<Response<U>>> {
      return AxiosClient.put<Response<U>>(url, data, config);
    },
    async patch<T, U>(url: string, data?: T, config?: Partial<CustomConfig>): Promise<AxiosResponse<Response<U>>> {
      return AxiosClient.patch<Response<U>>(url, data, config);
    },
    async delete<U>(url: string, config?: Partial<CustomConfig>): Promise<AxiosResponse<Response<U>>> {
      return AxiosClient.delete<Response<U>>(url, config);
    },
  };
}
const APIClient = http();
export default APIClient;
