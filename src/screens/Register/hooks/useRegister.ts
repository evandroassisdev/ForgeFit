import { useState } from "react";

export const useRegister = () => {
  const [userData, setUserData] = useState({
    name: 'Evandro',
  });
  
  return {
    userData,
    setUserData,
  };
};