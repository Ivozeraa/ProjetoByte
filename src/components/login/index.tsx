import { Text, View } from "react-native";
import { s } from "./styles"
import { Button } from "../button";
import { colors } from "@/styles/colors";
import { router } from "expo-router";


export function LoginPage(){
    return(
         <>
         <View style={s.container}>
                <Button
                  title={"Voltar"}
                  color={colors.green.base}
                  textColor={colors.gray[100]}
                  onPress={() => router.navigate('/')}
                />
         </View>
            </>
    )
}