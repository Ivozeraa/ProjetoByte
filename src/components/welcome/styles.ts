import { StyleSheet } from "react-native"
import { colors } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  titlePage: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.green.base,
  },
  ContainerButton:{
    paddingBottom: 20
  }
})