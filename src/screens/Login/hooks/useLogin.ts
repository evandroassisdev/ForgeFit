import { useState } from "react";

export type UseLoginProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useLogin = (): UseLoginProps => {
  const [loading, setLoading] = useState(false);
  
  return {
    loading,
    setLoading,
  };
};