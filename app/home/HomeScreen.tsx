import { AppButton } from "@/components/AppButton";
import { Container } from "@/components/Container";
import { useAppNavigation } from "@/navigations/hooks";
import React, { View, Text } from "react-native";
import { useHomeScreen } from "./useHomeScreen";

export default function HomeScreen() {
  const navigation = useAppNavigation();
  useHomeScreen();
  return (
    <Container safer="all">
      <Text>Home</Text>
      <AppButton
        text="Search"
        onPress={() => {
          navigation.navigate("Feedback");
        }}
      />
    </Container>
  );
}
