import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

export default class ApiService {
  baseURL = process.env.URL;
  botAuth = "Bot " + process.env.TOKEN;

  headers: AxiosRequestHeaders = {
    Authorization: this.botAuth,
  };

  config: AxiosRequestConfig = {
    baseURL: this.baseURL,
    headers: this.headers,
  };

  async get(path: string) {
    axios.get(path, this.config);
  }

  async post(path: string, data: AxiosRequestConfig) {
    axios.post(path, data, this.config);
  }
}
