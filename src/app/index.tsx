import { View, Text } from "react-native"
import { Welcome } from '@/components/welcome'
import { Button } from '@/components/button'

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
    </View>
  )
}