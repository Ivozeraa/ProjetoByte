import { View, Text } from "react-native";
import { s } from "./styles";
import { Button } from "../button";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export function Welcome() {
  return (
    <>
      <View style={s.container}>
        <Text style={s.titlePage}>Welcome Page</Text>
      </View>
      <View style={s.ContainerButton}>
        <Button
          title={"Começar"}
          color={colors.green.base}
          textColor={colors.gray[100]}
          onPress={() => router.navigate('Login' as any)}
        />
      </View>
    </>
  );
}
