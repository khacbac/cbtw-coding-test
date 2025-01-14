import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type IAppInput = TextInputProps & {
  label?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  isError?: boolean;
};
export const AppInput = ({
  label,
  style,
  inputStyle,
  isError,
  ...props
}: IAppInput) => {
  return (
    <View style={style}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder="5"
        style={[styles.input, inputStyle, isError && { borderColor: "red" }]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 8,
  },
});
