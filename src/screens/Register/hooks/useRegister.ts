import { useState } from "react";

export type UseRegisterProps = {
  userData: {
    name: string;
  };
  setUserData: (userData: { name: string }) => void;
};

export const useRegister = (): UseRegisterProps => {
  const [userData, setUserData] = useState({
    name: 'Evandro',
  });
  
  return {
    userData,
    setUserData
  };
};