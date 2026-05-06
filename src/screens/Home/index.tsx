import { Text, View } from "react-native";
import { useHome } from "./hooks/useHome";

export function HomeScreen ({ loading, setLoading }: ReturnType<typeof useHome>) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
