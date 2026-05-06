import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useLogin } from "./hooks/useLogin";

export function LoginScreen({ loading, setLoading }: ReturnType<typeof useLogin>) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Login</Text>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
