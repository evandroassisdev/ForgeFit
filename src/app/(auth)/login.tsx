import { LoginScreen } from "@/screens/Login";
import { useLogin } from "@/screens/Login/hooks/useLogin";

export default function Login() {
  const props = useLogin();
  
  return <LoginScreen {...props} />;
}
