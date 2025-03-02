import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { s } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  color?: string;
  textColor?: string;
};

export function Button({ title, color, textColor, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        s.container,
        { backgroundColor: color || s.container.backgroundColor },
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[s.title, { color: textColor || s.title.color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
