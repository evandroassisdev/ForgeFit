import { Text, View } from "react-native";
import { useHome } from "./hooks/useHome";

export function HomeScreen() {
  const { loading } = useHome();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
