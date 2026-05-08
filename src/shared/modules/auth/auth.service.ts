import { axiosApiClient } from "@/shared/api/axios";
import {
  RegisterHttpParams,
  RegisterHttpResponse,
} from "@/shared/modules/auth/auth.types";

export const register = async (
  userData: RegisterHttpParams
): Promise<RegisterHttpResponse> => {
  const { data } = await axiosApiClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData
  );

  return data;
};
