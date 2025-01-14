import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./ThemedText";

type IAppButton = {
  text: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};
export const AppButton: React.FC<IAppButton> = ({
  text,
  onPress,
  textStyle,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          backgroundColor: "#0a7ea4",
          height: 48,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        },
        style,
      ]}
    >
      <ThemedText style={[{ fontSize: 16, color: "white" }, textStyle]}>
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};
