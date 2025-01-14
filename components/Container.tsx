import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";

type IContainer = {
  style?: StyleProp<ViewStyle>;
  safer?: "top" | "bottom" | "all" | "none";
} & PropsWithChildren;
export const Container: React.FC<IContainer> = ({
  children,
  safer = "none",
  style,
}) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <ThemedView
      style={[
        {
          flex: 1,
          ...((safer === "all" || safer === "bottom") && {
            paddingBottom: bottom,
          }),
          ...((safer === "all" || safer === "top") && { paddingTop: top }),
        },
        style,
      ]}
    >
      {children}
    </ThemedView>
  );
};
