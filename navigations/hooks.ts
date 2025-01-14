import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "./type";

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};

export const useAppRoute = <T extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, T>>();
};
