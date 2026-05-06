import { HomeScreen } from "@/screens/Home";
import { useHome } from "@/screens/Home/hooks/useHome";

export default function Home() {
  const props = useHome();

  return <HomeScreen {...props} />;
}
