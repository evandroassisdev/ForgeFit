import { useState } from "react";

export type UseHomeProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useHome = (): UseHomeProps => {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading,
  };
};
