import axios from "axios";
import qs from 'qs'

// 引入 axios 库中的请求配置类型和响应类型
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";

const server = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 请求拦截器，对请求进行处理
server.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送前可对请求配置进行处理
    if (config.method === 'get') {
      config.data  = qs.stringify(config.data)
    }
    const headers: any = {
      'Content-Type': 'application/json',
    }
    config.headers = headers;
    if (localStorage.getItem('token')) {
      //携带token到axios参数
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return config;
  },
  (error: any) => {
    // 如果发生错误，通过 Promise.reject 方法返回错误信息
    return Promise.reject(error);
  }
);

// 响应拦截器，对响应进行处理
server.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据进行处理
    return response;
  },
  (error: any) => {
    // 如果发生错误，通过 Promise.reject 方法返回错误信息
    // 主要是接受异常
    return Promise.reject(error);
  }
);

export default server;