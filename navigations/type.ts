import { GifDetail } from "@/api/type";

export type RootStackParamList = {
  Home: undefined;
  Feedback: { gifDetail: GifDetail };
  Search: undefined;
};
