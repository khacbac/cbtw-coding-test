import { AppButton } from "@/components/AppButton";
import { Container } from "@/components/Container";
import { useAppNavigation } from "@/navigations/hooks";
import React, { View, Text } from "react-native";
import { useHomeScreen } from "./useSearchScreen";

export default function SearchScreen() {
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
