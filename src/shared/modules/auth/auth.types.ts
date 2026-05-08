import { UserInterface } from "@/shared/modules/user/user.types";

export interface RegisterHttpParams {
  name: string;
  email: string;
  avatarUrl: string;
  phone: string;
  password: string;
}

export interface RegisterHttpResponse {
  user: UserInterface;
  token: string;
  refreshToken: string;
}
