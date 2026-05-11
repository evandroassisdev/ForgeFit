import { useMutation } from "@tanstack/react-query";
import * as authService from "@/shared/modules/auth/auth.service";
import { RegisterHttpParams } from "@/shared/modules/auth/auth.types";

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) => authService.register(userData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};
