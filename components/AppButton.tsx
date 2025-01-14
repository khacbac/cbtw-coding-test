import { StyleProp, TextStyle, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";

type IAppButton = {
  text: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
};
export const AppButton: React.FC<IAppButton> = ({
  text,
  onPress,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <ThemedText style={[textStyle, { fontSize: 16 }]}>{text}</ThemedText>
    </TouchableOpacity>
  );
};
