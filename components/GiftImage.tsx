import React, { memo, useState } from "react";
import { View, StyleProp, ViewStyle, DimensionValue } from "react-native";
import { Image, ImageProps } from "expo-image";
import Animated, { FadeOut } from "react-native-reanimated";

export type GiftImageProps = ImageProps & {
  containerStyle?: StyleProp<ViewStyle>;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  borderRadius?: number;
};
export const GiftImage = memo(
  ({
    containerStyle,
    width,
    height,
    style,
    borderRadius,
    ...props
  }: GiftImageProps) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <View style={[containerStyle, { borderRadius: borderRadius }]}>
        <Image
          {...props}
          onLoad={(e) => {
            setLoaded(true);
            props.onLoad?.(e);
          }}
          style={[style, { width: width, height: height, borderRadius }]}
        />
        {!loaded && (
          <Animated.View
            style={{
              width,
              height,
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius,
            }}
            exiting={FadeOut.duration(1000)}
          />
        )}
      </View>
    );
  }
);
