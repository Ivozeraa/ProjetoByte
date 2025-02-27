import { View, Text } from "react-native"
import { Login } from '@/components/login'

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Login />
    </View>
  )
}