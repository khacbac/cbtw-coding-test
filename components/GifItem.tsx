import React, { memo } from "react";
import { GifDetail } from "@/api/type";
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { GiftImage } from "./GiftImage";

const ITEM_WIDTH = Dimensions.get("window").width / 3;
const ITEM_HEIGHT = ITEM_WIDTH / 1.2;

export const GifItem = memo(
  ({ item, onPress }: { item: GifDetail; onPress: () => void }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <GiftImage
          width={ITEM_WIDTH}
          height={ITEM_HEIGHT}
          borderRadius={8}
          source={{ uri: item.images.fixed_height.url }}
        />
        <View style={styles.right}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  right: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1c1c1c",
  },
});
