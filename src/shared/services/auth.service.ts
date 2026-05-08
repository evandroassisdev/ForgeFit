import { axiosApiClient } from "../api/axios";
import { RegisterHttpParams, RegisterHttpResponse } from "@interfaces/http/register";

export const register = async (userData: RegisterHttpParams): Promise<RegisterHttpResponse> => {
  const { data } = await axiosApiClient.post<RegisterHttpResponse>('/auth/register', userData);
  
  return data;
}