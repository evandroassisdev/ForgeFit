import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  
  return {
    loading,
    setLoading,
  };
};