import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { Container } from "@/components/Container";
import { GiftImage } from "@/components/GiftImage";
import { useAppRoute } from "@/navigations/hooks";
import { validateRating } from "@/utils/comment";
import { Image } from "expo-image";
import { useState } from "react";
import React, {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

const ITEM_WIDTH = Dimensions.get("window").width - 32;
const ITEM_HEIGHT = ITEM_WIDTH / 1.2;

export default function FeedbackScreen() {
  const route = useAppRoute<"Feedback">();
  const { gifDetail } = route.params;
  const [rating, setRating] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [isRatingError, setIsRatingError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!validateRating(rating)) {
      setIsRatingError(true);
      Alert.alert("Please enter a valid rating between 1 and 5.");
      return;
    }
  };

  const renderForm = () => {
    return (
      <View style={styles.form}>
        <View style={{ gap: 12 }}>
          <AppInput
            label="Rating*"
            value={rating}
            onChangeText={(text) => {
              setRating(text);
              if (isRatingError) {
                setIsRatingError(false);
              }
            }}
            placeholder="5"
            isError={isRatingError}
            keyboardType="decimal-pad"
          />
          <AppInput
            label="Comment"
            value={comment}
            onChangeText={setComment}
            multiline
            placeholder="Write your comment here..."
          />
        </View>
        <AppButton
          text="Submit"
          onPress={handleSubmit}
          style={{ marginTop: 16 }}
        />
      </View>
    );
  };

  return (
    <Container safer="bottom">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: gifDetail.user.avatar_url }}
              style={styles.avatarImage}
            />
            <View style={styles.avatarInfo}>
              <Text style={styles.avatarName}>
                {gifDetail.user.display_name}
              </Text>
              <Text style={styles.avatarUsername}>
                @{gifDetail.user.username}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>{gifDetail.title}</Text>
          <GiftImage
            width={ITEM_WIDTH}
            height={ITEM_HEIGHT}
            borderRadius={8}
            source={{ uri: gifDetail.images.fixed_height.url }}
            style={styles.gif}
          />
        </View>
        {renderForm()}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: "#1c1c1c",
    fontWeight: "400",
    marginTop: 16,
  },
  gif: {
    marginTop: 16,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  avatarInfo: {
    marginLeft: 8,
  },
  avatarName: {
    fontSize: 16,
    color: "#1c1c1c",
    fontWeight: "500",
  },
  avatarUsername: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 8,
    maxHeight: 150,
  },
  formTitle: {
    fontSize: 16,
    color: "#1c1c1c",
    fontWeight: "500",
    marginBottom: 8,
  },
  form: {
    marginTop: 16,
  },
});
