import { AppButton } from "@/components/AppButton";
import { Container } from "@/components/Container";
import { useAppNavigation } from "@/navigations/hooks";
import { RootStackParamList } from "@/navigations/type";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import React, { View, Text } from "react-native";

export default function HomeScreen() {
  const navigation = useAppNavigation();
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
