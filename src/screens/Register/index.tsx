import { Text, View } from "react-native";
import { useRegister } from "./hooks/useRegister";

export function RegisterScreen() {
  const { userData } = useRegister();
  
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{userData.name}</Text>
    </View>
  );
}
