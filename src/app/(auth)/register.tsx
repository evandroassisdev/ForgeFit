import { RegisterScreen } from "@/screens/Register";
import { useRegister } from "@/screens/Register/hooks/useRegister";

export default function Register() {
  const props = useRegister();

  return <RegisterScreen {...props} />;
}
