import { StyleSheet } from "react-native"
import { colors } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.green.base,
    fontSize: 16,
    fontWeight: '600'
  }
})