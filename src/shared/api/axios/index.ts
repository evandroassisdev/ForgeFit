import axios, { AxiosInstance } from "axios";

export class AxiosApiClient{
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.example.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const axiosApiClient = new AxiosApiClient().getInstance();